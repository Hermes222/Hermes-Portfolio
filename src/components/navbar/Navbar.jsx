import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom';
import './navbar.css';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.png'
import ContactPage from '../contactpage/ContactPage';
const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#whatHermes'>about me</a></p>
  <p><a href='#Skills'>Skills</a></p>
  <p><a href='#posibility'>projects</a></p>
  <p><a href='#blog'>Resume</a></p>
  </>
)
const Navbar = () => {

  const[toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='Hermes__navbar'>
      <div className="Hermes__navbar-links">
        <div className='Hermes__navbar--links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className="Hermes__navbar-links_container">
         <Menu/>
        </div>
      </div>
      <div className="Hermes__navbar-sign">
        <ContactPage/>
        {/* <button type='button' onClick={ContactPage}>Contact Me</button> */}
      </div>
      <div className="Hermes__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
        :<RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className="Hermes__navbar-menu_container scale-up-center"> 
          <div className=".Hermes__navbar-menu_container-links">
            <Menu/>
            <div className="Hermes__navbar-menu_container-links-sign">
            <ContactPage/>
      </div>
          </div>
          </div>
        )}
      </div>
    </div>
  )

}


export default Navbar