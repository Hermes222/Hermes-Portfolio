import React from "react";
import "./brand.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faYoutube,
  faDiscord,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Brand = () => {
  return (
    <div className="Hermes__brand section__padding">
      <div className="insta">
        <a href="https://www.instagram.com/herms____/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <div className="link">
        <a href="https://www.linkedin.com/in/hermes22" target="_blank">
          <FontAwesomeIcon icon={faLinkedin}  size="2x" />
        </a>
      </div>
      <div className="git">
        <a  href="https://github.com/Hermes222" target="_blank">
        <FontAwesomeIcon icon={faGithub}   size="2x"/>
        </a>
      </div>
      <div className="dis">
        <a href="https://discordapp.com/users/hermes222#1212/" target="_blank">
        <FontAwesomeIcon icon={faDiscord}  size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Brand;
