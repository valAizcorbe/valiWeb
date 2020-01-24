import React, { Component } from "react";
import avila from "../images/avila.jpg";
import { Link } from "react-router-dom";
import "../style/home.css";
function Home() {
  return (
    <body className="home">
      <div className="pic-about">
        <img className="selfie" src={avila} alt="selfie" />
        <h1 className="text-end"> Hi! I'm Valeria,</h1>
        <p className="text-about">
          I'm a bilingual full stack web developer based in American Fork, Utah.
          I'm passionate about my career and can't wait to learn more about the
          latest technologies available and keep growing as a developer.
        </p>
        <Link to="/about">
          <button className="information">LEARN MORE</button>
        </Link>
      </div>
      <hr className="dotted" />

      <div className="section-s">
        <p className="text-final">
          Here are some the languages I've been working with:
        </p>

        <div className="text-skills">
          <div className="column-1">
            <p className="skills">HTML5 </p>
            <p className="skills">CSS3/SASS</p>

            <p className="skills">NODE</p>
            <p className="skills">BCRYPT </p>
          </div>

          <div className="column-1">
            <p className="skills">EXPRESS</p>
            <p className="skills">SESSIONS</p>
            <p className="skills">JAVASCRIPT</p>
            <p className="skills">REACT</p>
          </div>

          <div className="column-1">
            <p className="skills">CHARTJS </p>
            <p className="skills">SQL</p>
            <p className="skills">REDUX</p>
            <p className="skills">JEST </p>
          </div>
        </div>
      </div>
      <hr className="dotted" />
      <footer>
        {" "}
        <h2 className="text-end">
          {" "}
          Hey! I'm currently available for freelance work
        </h2>
        <p className="text-final">
          If you have a project in mind, I could help! Let's get in touch.
        </p>
        <a href="mailto:valeria.aizcorbe@gmail.com? subject=subject text">
          <button className="contact">CONTACT ME</button>
        </a>
      </footer>
    </body>
  );
}
export default Home;
