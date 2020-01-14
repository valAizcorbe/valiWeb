import React, { Component } from "react";
function Projects() {
  return (
    <p>
      <a href="https://github.com/valAizcorbe/NODB">
        <h1 className="title">Recipes</h1>
      </a>
      <p>
        My first project: This is a very simple RESTful website where you can
        upload your recipes using only REACT, JS, CSS, HTML.
      </p>
      <a href="https://github.com/valAizcorbe/Avalanche">
        <h1 className="title">Avalanche</h1>
      </a>
      <p>
        Personal Project: Avalanche is an app that helps you calculate when
        you'll be debt free and start having savings. Awesome right? I used
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

      <h3 className="title">See more about my work</h3>
      <a href="https://github.com/settings/profile">GitHub</a>
    </p>
  );
}
export default Projects;
