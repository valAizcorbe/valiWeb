import React from "react";
import "../style/contact.css";
import redhead from "../images/redhead.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <body className="body-contact">
      <img src={redhead} className="redhead" alt="redhead" />
      <div className="info-contact">
        <h2 className="phrase">Let's get in contact</h2>

        <a href="mailto:valeria.aizcorbe@gmail.com?">
          <button className="buttonP">
            Send me an email
            <MdEmail />
          </button>
        </a>

        <a href="https://www.linkedin.com/in/valeriaaizcorbe/">
          <button className="buttonP">
            Find me in Linkedin
            <FaLinkedinIn />
          </button>
        </a>
      </div>
    </body>
  );
}
export default Contact;
