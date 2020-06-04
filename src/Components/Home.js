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
          latest technologies available, best coding practices and keep growing
          as a developer.
        </p>
        <Link to="/about">
          <button className="button">LEARN MORE</button>
        </Link>
      </div>
      <hr className="dotted" />

      <div className="section-s">
        <p className="text-final">
          Here are some the languages and tools I've worked with:
        </p>

        <div className="text-skills">
          <ul className="column-1">
            <li className="skills">HTML5 </li>
            <li className="skills">CSS3/SASS</li>
            <li className="skills">NODE</li>
            <li className="skills">BCRYPT </li>
            <li className="skills">HEROKU</li>
          </ul>

          <ul className="column-1">
            <li className="skills">EXPRESS</li>
            <li c0lassName="skills">SESSIONS</li>
            <li className="skills">JAVASCRIPT</li>
            <li className="skills">REACT</li>
            <li className="skills">POSTMAN</li>
            <li className="skills">VS CODE</li>
          </ul>

          <ul className="column-1">
            <li className="skills">CHARTJS </li>
            <li className="skills">SQL</li>
            <li className="skills">REDUX</li>
            <li className="skills">JEST </li>
            <li className="skills">MASSIVE</li>
          </ul>
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
          <button className="button">CONTACT ME</button>
        </a>
      </footer>
    </body>
  );
}
export default Home;
