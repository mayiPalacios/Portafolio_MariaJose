import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container row " style={{ marginLeft: "52px" }}>
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className=" row">
          <div className="col">
            <FontAwesomeIcon icon={faPhone} />
            <p className="m-0">+503 70411207</p>
          </div>

          <div className="col">
            <FontAwesomeIcon icon={faGithub} />
            <p className="m-0">https://github.com/mayiPalacios</p>
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="m-0">mayi20001717@gmail.com</p>
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faLocation} />
            <p className="m-0">El Salvador,Zacatecoluca</p>
          </div>

          <div className="col">
            <FontAwesomeIcon icon={faLinkedin} />
            <p className="m-0">https://www.linkedin.com/in/mayipalacios/</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
