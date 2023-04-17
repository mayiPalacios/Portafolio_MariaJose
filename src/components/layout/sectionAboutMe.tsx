import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const SectionAboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row no-gutters pt-3">
          <StaticImage
            alt="aboutM"
            style={{ height: "60vh" }}
            className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
            src="../../images/aboutMe.jpg"
          />

          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <h3>PROFILE</h3>
              <p>
                CS Engineering Student currently in five year. I consider myself
                a creative person, honest, open-minded and responsible,
                passionate about technology and new knowledge
              </p>
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <p>
                      <strong>My professional goal</strong> is to maintain
                      continuous growth in my work life and knowledge
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <p>
                      <strong>I consider myself</strong> a proactive person with
                      a positive attitude towards challenges.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <p>
                      <strong>I like to work </strong> in a team and collaborate
                      with my colleagues to achieve common goals.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <p>
                      <strong>I am a proactive </strong> person with a great
                      ability to adapt to changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;
