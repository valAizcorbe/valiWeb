import React from "react";
import avila from "../images/avila.jpg";
import { Link } from "react-router-dom";
import "../style/home.css";
import Footer from "./footer";
function Home() {
  return (
    <body className="home">
      <div className="pic-about">
        <img className="selfie" src={avila} alt="selfie" />
        <section className="right-column">
          <h1 className="text-end"> Hi! I'm Valeria,</h1>
          <p className="text-about">
            I'm a bilingual full stack web developer based in American Fork,
            Utah. I'm passionate about my career and can't wait to learn more
            about the latest technologies available, best coding practices and
            keep growing as a developer.
          </p>
          <Link to="/about">
            <button className="buttonP">LEARN MORE</button>
          </Link>
        </section>
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
      <Footer />
    </body>
  );
}
export default Home;
