import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <StaticImage
          id="static__img"
          style={{
            position: "absolute",
            zIndex: -1,
            backgroundPosition: "25% 75%",
            width: "80%",
            height: "100%",
          }}
          alt="principal-img"
          src="../../images/imgP.jpeg"
        />

        <div style={{ zIndex: 20, color: "white" }}>
          <h1>Hi, I'm Majo!</h1>
          <h2>I am a Frontend Developer</h2>
          <a href="#about" className="btn-get-started scrollto">
            <i className="bi bi-chevron-double-down"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Header;
