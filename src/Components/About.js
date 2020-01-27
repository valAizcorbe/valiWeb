import React, { Component } from "react";
import pic from "../images/about-pic.jpg";
import "../style/about.css";
function About() {
  return (
    <p className="about-page">
      <div className="about">
        <img src={pic} alt="pic" className="pic" />
        <div className="about-text">
          <h1 className="text-title">Hello there,</h1>{" "}
          <h2 className="text-title">thank you for the visit ...</h2>
          <span className="about-info">
            Born in Peru, lived a few years in Spain, now based in Utah. I'm a
            fullstack web developer with a background of Administration and
            Finances. I changed my career not too long ago and I finally love
            what I do! I went to DevMountain for the Web Development immersive
            class and I can say that it was an awesome experience, I learned a
            lot in a few time and worked really hard for it. I'm excited to see
            the challenges I will have as a developer and expand the skills that
            I already have.
          </span>
          <a href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Ae4036217-bfb7-4871-b3d4-f0b9f3fcffc0">
            <button className="resume">SEE RESUME</button>
          </a>
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
    </p>
  );
}
export default About;
