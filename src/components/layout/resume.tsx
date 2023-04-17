import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">EDUCATION</h3>
            <div className="resume-item pb-0">
              <h4>2019-CURRENT</h4>
              <p>
                <em>Universidad Centroamericana José Simeón Cañas</em>
              </p>
              <p>
                Some approved courses
                <ul>
                  <li>Web development</li>
                  <li>Software Engineering</li>
                  <li>Database administration</li>
                  <li>Object-oriented programming</li>
                  <li>Analysis of Algorithms</li>
                </ul>
              </p>
            </div>

            <h3 className="resume-title">EXTRACURRICULAR</h3>
            <div className="resume-item">
              <h4>F E Y ALEGRIA</h4>
              <h5>2022</h5>

              <p>
                Fe y Alegría is a Movement for Comprehensive Popular Education
                and Social Promotion whose action is directed at impoverished
                and excluded sectors to enhance their personal development and
                social participation. My role in this project was to provide
                support in electronic equipment and activities at the service of
                these communities.
              </p>
            </div>
            <div className="resume-item">
              <h4>FLEXIBLE MODALITY PROGRAM</h4>
              <h5>2022</h5>

              <p>
                It consists of offering various educational alternatives, from
                Basic Education to High School, for all those people who for
                some reason left their studies, and who today wish to resume
                them.My role in this program was to provide support teachers and
                students in different activities like resources and help with
                general document management
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="resume-item">
              <h4>INSTRUCTOR</h4>

              <p>
                I was an instructor in Fundamentals of programming and
                Object-oriented programming, where I took the role of assistant
                of the professorship, and I gave support in workshops and to
                help students with their difficulties in the subjects.
              </p>
            </div>
            <div className="resume-item">
              <h4>PERSONAL SKILLS</h4>

              <p>
                <ul>
                  <li>English- Intermediate Currently studying</li>
                  <li>Team work</li>
                  <li>Effective communication</li>
                  <li>Problem Solving</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
