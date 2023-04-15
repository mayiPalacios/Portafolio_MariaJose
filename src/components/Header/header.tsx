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
          style={{ position: "absolute", zIndex: -1,objectFit:"cover",width:"100%",height:"100%",top:"0"
        }}
          alt="principal-img"
          src="../../images/imgP.jpg"
        />
        <div   style={{  zIndex: 20,color:"white"}}>
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
