import React from "react";
import "../style/contact.css";
import redhead from "../images/redhead.jpg";
function Contact() {
  return (
    <body className="body-contact">
      <img src={redhead} className="redhead" />
      <div className="info-contact">
        <h2 className="phrase">Let's get in contact</h2>

        <a href="mailto:valeria.aizcorbe@gmail.com? subject=subject text">
          <button className="button-contact">
            Send me an email
            <img
              src="https://img.icons8.com/dotty/2x/email.png"
              className="email"
            />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/valeriaaizcorbe/">
          <button className="button-contact">
            Find me on Linkedin{" "}
            <img
              src="https://www.jing.fm/clipimg/full/200-2006266_linkedin-logo-vector-png-free-download-portrait-of.png"
              className="linkedin"
            />
          </button>
        </a>
      </div>
    </body>
  );
}
export default Contact;
