import React, { Component } from "react";
import selfie from "../images/selfie.jpg";
function Home() {
  return (
    <p>
      <h1 className="name">Valeria Aizcorbe</h1>
      <p>
        I'm a bilingual full stack web developer based in American Fork, Utah.
        I'm passionate about my career and can't wait to learn more about the
        latest technologies available and keep growing as a developer.
      </p>
      <img className="selfie" src={selfie} alt="selfie" />
      <h1 className="title">
        {" "}
        Hey! I'm currently available for freelance work
      </h1>
      <p>If you have a project in mind, I could help! Let's get in touch.</p>
    </p>
  );
}
export default Home;
