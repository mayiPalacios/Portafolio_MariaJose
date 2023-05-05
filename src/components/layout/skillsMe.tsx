import React from "react";

const SkillsMe = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">HTML</span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">SCSS</span>
              <div className="progress-bar-wrap">
                <div
                  style={{ width: "100%" }}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript</span>
              <div className="progress-bar-wrap">
                <div
                  style={{ width: "100%" }}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">MySQL</span>
              <div className="progress-bar-wrap">
                <div
                  style={{ width: "100%" }}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">React TS</span>
              <div className="progress-bar-wrap">
                <div
                  style={{ width: "100%" }}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Next js and gatsby</span>
              <div className="progress-bar-wrap">
                <div
                  style={{ width: "100%" }}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMe;
