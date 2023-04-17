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
              <span className="skill">
                HTML <i className="val">100%</i>
              </span>
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
              <span className="skill">
                CSS <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  style={{ width: "70%" }}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                JavaScript <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                style={{ width: "80%" }}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
              MySQL <i className="val">50%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                style={{ width: "75%" }}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  
                </div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                React JS <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                style={{ width: "80%" }}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
               knowledge of
dynamic programming <i className="val">55%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                style={{ width: "55%" }}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={55}
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
