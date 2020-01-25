import React, { Component } from "react";
import pic from "../images/about-pic.jpg";
import "../style/about.css";
function About() {
  return (
    <p className="about">
      <img src={pic} alt="pic" className="pic" />
      <div className="about-text">
        <h1 className="text-title">Hello there,</h1>{" "}
        <h2 className="text-title">thank you for the visit ...</h2>
        <span className="about-info">
          Born in Peru, lived a few years in Spain, now based in Utah. I'm a
          fullstack web developer with a background of Administration and
          Finances. I changed my career not too long ago and I finally love what
          I do! I went to DevMountain for the Web Development immersive class
          and I can say that it was an awesome experience, I learned a lot in a
          few time and worked really hard for it. I'm excited to see the
          challenges I will have as a developer and expand the skills that I
          already have.
        </span>
        <a href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Ae4036217-bfb7-4871-b3d4-f0b9f3fcffc0">
          <button className="resume">RESUME</button>
        </a>
      </div>
    </p>
  );
}
export default About;
