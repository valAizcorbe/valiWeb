import React from "react";

function Footer() {
  return (
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
        <button className="buttonP">
          <h3>CONTACT ME</h3>
        </button>
      </a>
    </footer>
  );
}

export default Footer;
