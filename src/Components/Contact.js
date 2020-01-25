import React from "react";
import "../style/contact.css";
import redhead from "../images/redhead.jpg";
function Contact() {
  return (
    <body className="body-contact">
      <img src={redhead} className="redhead" />
      <div className="info-contact">
        <h2 className="phrase">Let's get in contact</h2>

        <button className="button-contact">
          <a href="mailto:valeria.aizcorbe@gmail.com? subject=subject text">
            Email me{" "}
            <img
              src="https://img.icons8.com/dotty/2x/email.png"
              className="email"
            />
          </a>
        </button>
        <button className="button-contact">
          <a href="https://www.linkedin.com/in/valeriaaizcorbe/">
            Find me in Linkedin{" "}
            <img
              src="https://www.jing.fm/clipimg/full/200-2006266_linkedin-logo-vector-png-free-download-portrait-of.png
        "
              className="linkedin"
            />
          </a>
        </button>
      </div>
    </body>
  );
}
export default Contact;
