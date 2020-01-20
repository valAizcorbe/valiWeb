import React, { Component } from "react";
import recipe from "../images/recipe.mp4";
import avalanche from "../images/avalanche.mp4";

function Projects() {
  return (
    <p>
      <a href="https://github.com/valAizcorbe/NODB">
        <h1 className="title">Recipes</h1>
      </a>
      <video
        width="320"
        height="240"
        controls
        src={recipe}
        type="video/mp4"
      ></video>
      <p>
        My first project: This is a very simple RESTful website where you can
        upload your recipes. I made this in 4 days with only weeks of experience
        using only REACT, JS, CSS, HTML.
      </p>
      <a href="https://github.com/valAizcorbe/Avalanche">
        <h1 className="title">Avalanche</h1>
      </a>
      <video
        width="320"
        height="240"
        controls
        src={avalanche}
        type="video/mp4"
      ></video>
      <p>
        Personal Project: Avalanche is an app that helps you calculate when
        you'll be debt free and start having savings. Awesome right? I created
        this website in 2 weeks when I had almost 2 months of experience using
        REACT REDUX, REACT-ROUTER, JS, CSS, HTML, SQL, NODE, EXPRESS, SESSION,
        BCRYPT, MASSIVE, CHARTJS.
      </p>
      <a href="https://github.com/VRTS-group/VRTS">
        <h1 className="title">Artistry</h1>
      </a>
      <p>
        Group Project: Artistry is a social media website for Artists. We used
        REACT, REACT REDUX, REACT PLAYER, REACT-ROUTER, JS, SASS, HTML, SQL,
        NODE, EXPRESS, BCRYPT, MASSIVE.
      </p>
      <a href="http://138.68.232.15:4200/#/">
        <h1>Artistry Website</h1>
      </a>

      <h3 className="title">See more about my work</h3>
      <a href="https://github.com/settings/profile">
        <img src="https://gocode.colorado.gov/wp-content/uploads/2017/03/github-600.png" />
      </a>
    </p>
  );
}
export default Projects;
