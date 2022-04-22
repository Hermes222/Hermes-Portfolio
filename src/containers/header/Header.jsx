import React from "react";
import "./header.css";
import me from "../../assets/me.png";

const Header = () => {
  return (
    <div className="Hermes__header section__padding" id="home">
      <div className="Hermes__header-content">
        <h1 className="gradient__text">
          Hi my name is Hermes Chavez Marin and I'm a software engineer
        </h1>
        <p>
          i am intrested in web and App development and am willing to try
          anything else related to software engineering. if you would like to
          contact me for recruitment or freelance work please click the contact
          me button.
        </p>
      </div>
      <div className="Hermes__header-image">
        <img src={me} alt="me" />
      </div>
    </div>
  );
};

export default Header;
