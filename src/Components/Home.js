import React, { Component } from "react";
import avila from "../images/avila.jpg";
import "../style/home.css";
function Home() {
  return (
    <p className="home">
      <h1 className="name">Valeria Aizcorbe</h1>
      <p className="texto">
        I'm a bilingual full stack web developer based in American Fork, Utah.
        I'm passionate about my career and can't wait to learn more about the
        latest technologies available and keep growing as a developer.
      </p>
      <img className="selfie" src={avila} alt="selfie" />
      <h1 className="title">Skills</h1>
      <dl className="texto-skills">
        Here are some the languages I've been working with
      </dl>
      <div className="lista">
        <dt className="skills">HTML5</dt>
        <dd className="skills">CSS3</dd>
        <dt className="skills">SASS</dt>
        <dd className="skills">NODE</dd>
        <dt className="skills">EXPRESS</dt>
        <dd className="skills">EXPRESS-SESSIONS</dd>
        <dt className="skills">JAVASCRIPT</dt>
        <dd className="skills">REACT</dd>
        <dt className="skills">REACT-REDUX</dt>
        <dd className="skills">CHARTJS</dd>
        <dt className="skills">SQL</dt>
        <dd className="skills">BCRYPT</dd>
        <dt className="skills">JEST</dt>
      </div>

      <h1 className="title">
        {" "}
        Hey! I'm currently available for freelance work
      </h1>
      <p className="texto-final">
        If you have a project in mind, I could help! Let's get in touch.
      </p>
    </p>
  );
}
export default Home;
