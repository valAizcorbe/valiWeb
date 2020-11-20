import React from "react";
import recipe from "../images/recipe.mp4";
import avalanche from "../images/avalanche.mp4";
import "../style/project.css";
import { FaGithub } from "react-icons/fa";
import { MdCode } from "react-icons/md";

function Projects() {
  return (
    <body className="project">
      <div className="recipes">
        {" "}
        <a href="https://github.com/valAizcorbe/NODB">
          <h2 className="title">Recipes</h2>
        </a>
        <section className="sec-recipe">
          <video
            width="500"
            height="400"
            controls
            src={recipe}
            type="video/mp4"
          ></video>
          <p className="text-r">
            <b>My first project:</b> This is a very simple NoDB RESTful website
            where you can upload your recipes. I made this in 4 days with only
            weeks of experience using: <b>REACT, JAVASCRIPT, CSS, HTML, NODE</b>{" "}
            and <b>EXPRESS.</b>
            <a href="https://github.com/valAizcorbe/NODB">
              <button className="buttonP">
                <MdCode />
                Code <FaGithub />
              </button>
            </a>
          </p>
        </section>
      </div>
      <hr className="dotted" />
      <div className="avalanche">
        {" "}
        <a href="https://github.com/valAizcorbe/Avalanche">
          <h2 className="title">Avalanche</h2>
        </a>
        <section className="sec-avalanche">
          {" "}
          <video
            width="500"
            height="400"
            controls
            src={avalanche}
            type="video/mp4"
          ></video>
          <p className="text-r">
            <b>Personal Project:</b> Avalanche is an app that helps you
            calculate when you'll be debt free and start having savings. I
            created this website in 2 weeks when I had almost 2 months of
            experience using{" "}
            <b>
              REACT REDUX, REACT-ROUTER, JAVASCRIPT, CSS, HTML, SQL, NODE,
              EXPRESS, EXPRESS-SESSION, BCRYPT, MASSIVE
            </b>{" "}
            and <b>CHARTJS.</b>
            <a href="https://github.com/valAizcorbe/Avalanche">
              <button className="buttonP">
                <MdCode />
                Code <FaGithub />
              </button>
            </a>
          </p>
        </section>{" "}
      </div>
      <hr className="dotted" />
      <div className="artistry">
        <a href="https://github.com/VRTS-group/VRTS">
          <h2 className="title">Artistry</h2>
        </a>
        <p className="sec-artistry">
          <b>Group Project:</b> Artistry is a social media website for Artists.
          They can sign in our website, and start posting about their art,
          videos and writing! They can 'save' the art that other account posted,
          make comments and just enjoy Artistry. We created this website using{" "}
          <b>
            REACT, REACT REDUX, REACT PLAYER, REACT-ROUTER, JAVASCRIPT, CSS,
            HTML, SQL, NODE, EXPRESS, EXPRESS-SESSION, BCRYPT
          </b>{" "}
          and <b>MASSIVE.</b>
          <a href="http://138.68.232.15:4200/#/">
            <button className="buttonP">Visit our website</button>
          </a>{" "}
          <a href="https://github.com/VRTS-group/VRTS">
            <button className="buttonP">
              <MdCode />
              Code <FaGithub />
            </button>
          </a>
        </p>
      </div>
      <hr className="dotted" />
      <footer className="end">
        <a href="https://github.com/valAizcorbe">
          <button className="buttonP">
            {" "}
            <MdCode /> More code <FaGithub />
          </button>
        </a>
      </footer>
    </body>
  );
}
export default Projects;
