import React, { Component } from "react";
import recipe from "../images/recipe.mp4";
import avalanche from "../images/avalanche.mp4";
import "../style/project.css";
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
            width="320"
            height="240"
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
              <h2 className="link">See it on github</h2>
            </a>
          </p>
        </section>
      </div>
      <hr className="dotted" />
      <div className="avalanche">
        {" "}
        <a href="https://github.com/valAizcorbe/Avalanche">
          <h2 className="title-r">Avalanche</h2>
        </a>
        <section className="sec-avalanche">
          {" "}
          <video
            width="320"
            height="240"
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
              <h2 className="link">See it on github</h2>
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
            <h2 className="link">Visit our website</h2>
          </a>
        </p>
      </div>
      <hr className="dotted" />
      <a href="https://github.com/settings/profile" className="end">
        <button className="github-button">
          <h1>See more about my work</h1>
          {""}
          <img
            className="github"
            src="http://pngimg.com/uploads/github/github_PNG40.png"
          />
        </button>
      </a>
    </body>
  );
}
export default Projects;
