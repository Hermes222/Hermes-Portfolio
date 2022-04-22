import React, { useState } from "react";
import "./contactpage.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
// bellow is the toast icon
const notify = () =>
  toast.success("Your email has been sent", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export default function ContactPage() {
  // the handle submit function checks if all the inputs are valid inputs then allows the email to be sent
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [result, showResult] = useState(false);
  // bellow is the email function which sends an email to me and an automatic email to the sender
  const sendEmail = (e) => {
    notify();
    emailjs
      .sendForm(
        "service_qp768h7",
        "template_ltpbm3q",
        "#form",
        "O9L34jTcnh87prqvc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    document.getElementById("form").reset();

    showResult(true);
    return false;
  };

  const [modal, setContactPage] = useState(false);
  const toggleModal = () => {
    setContactPage(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button type="button" onClick={toggleModal} className="btn-modal">
        Contact Me
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Contact Me</h2>
            <form className="form" id="form" onSubmit={handleSubmit(sendEmail)}>
              <label className="sizeLabel" htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                {...register("firstName", {
                  required: true,
                  maxLength: 40,
                  pattern: /^[A-Za-z ]+$/i,
                })}
              />
              {errors?.firstName?.type === "required" && (
                <p className="error">This field is required</p>
              )}
              {errors?.firstName?.type === "maxLength" && (
                <p className="error">First name cannot exceed 40 characters</p>
              )}
              {errors?.firstName?.type === "pattern" && (
                <p className="error">alphabetical characters only</p>
              )}
              <label htmlFor="email" className="sizeLabel">Email</label>

              <input
                id="email"
                name="email"
                 type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
               {errors?.email?.type === "required" && (
                <p className="error">This field is required</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className="error">Invalid email</p>
              )}
             
              <label htmlFor="message" className="sizeLabel"> Message </label>
              <textarea id="message" name="message" rows="4" cols="50"  {...register("message", {
                  required: true,
                  
                })} />
                 {errors?.message?.type === "required" && (
                <p className="error">This field is required</p>
              )}
              <input
                className="submit"
                type="submit"
                value="Submit"
              />
              
            </form>
            <button className="close-modal" onClick={toggleModal}>
              close
            </button>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      )}
    </>
  );
}
