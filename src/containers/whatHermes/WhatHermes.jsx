import React from "react";
import { Feature } from "../../components/index";
import "./whatHermes.css";
const WhatHermes = () => {
  return (
    <div className="whatHermes section__margin" id="whatHermes">
      <div className="whatHermes-Feature">
        <Feature
          title="about me"
          text="Hi my name is Hermes Chavez im currently a senior computer science student at California Baptist University"
        />
      </div>
      <div className="whatHermes-heading">
        <h1 className="gradient__text">About Me</h1>
        <p>Explore the Library</p>
      </div>
      <div className="whatHermes-container">
        <Feature
          title="Interest"
          text="im intrested in fullstack development and love making websites and apps"
        />
        <Feature
          title="Hobbies"
          text="i like doing Brazillian Jujitsu, wrestling and boxing"
        />
        <Feature
          title="Education"
          text="i go to california baptist university for a major in computer science and minor in software engineering"
        />
      </div>
    </div>
  );
};

export default WhatHermes;
