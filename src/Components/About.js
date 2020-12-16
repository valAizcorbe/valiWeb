import React from "react";
import pic from "../images/about-pic.jpg";
import cuties from "../images/cuties.jpg";
import cake from "../images/cake.jpg";
import cup from "../images/cup.jpg";
import "../style/about.css";
import Footer from "./footer/index";

function About() {
  return (
    <p className="about-page">
      <div className="about">
        {/* <img src={pic} alt="pic" className="pic" /> */}
        <div className="about-text">
          <h1 className="text-title">Hello there,</h1>{" "}
          <h2 className="text-title">thank you for the visit ...</h2>
          <span className="about-info">
            I am a full stack developer from Peru with a background of
            administration and finances. I changed my career not too long ago
            and I finally love what I do!
            <br />
            While studying development, I realized that I love solving problems
            with code and work on projects that help people. Now I’m looking for
            my first opportunity as a developer, where I can apply my knowledge,
            learn new skills and help create powerful products.
          </span>
          <a href="https://docs.google.com/dhttps://docs.google.com/document/d/1cWf7DJFnnC6KyRGsT5gtZbsMG62FkXeUWxAx2on5x64/edit?usp=sharingcument/d/1cWf7DJFnnC6KyRGsT5gtZbsMG62FkXeUWxAx2on5x64/edit?usp=sharing">
            <button className="buttonP">
              <h3>SEE RESUME</h3>
            </button>
          </a>
        </div>
      </div>
      <hr className="dotted" />
      <h2 className="text-end">things I love ...</h2>
      <div className="sec-fun">
        <div className="funfacts">
          <img src={cup} alt="cuties" className="cuties" />

          <p className="facts">Collecting mugs </p>
        </div>
        <div className="funfacts">
          <img src={cuties} alt="cuties" className="cuties" />
          <p className="facts">Playing with my puppies: Nebula and Phoebe</p>
        </div>
        <div className="funfacts">
          <img src={cake} alt="cuties" className="cuties" />

          <p className="facts">Bake some yummy food</p>
        </div>
      </div>
      <hr className="dotted" />
      <Footer />
    </p>
  );
}
export default About;
