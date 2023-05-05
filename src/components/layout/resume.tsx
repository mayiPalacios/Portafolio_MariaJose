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
            <div className="resume-item pb-1">
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

            <div className="resume-item  pb-0">
              <h4>Applaudo Studios - React Trainee Program</h4>
              <h5>JAN 2023 - MAY 2023</h5>

              <p>
                Main keys: Component Lifecycle State Management and Hooks React
                Router Performance Optimization: Lazy loading, code splitting,
                and memoization. Unit Testing: Jest TypeScript Gatsby and NextJs
              </p>
            </div>
            <div className="resume-item">
              <h3 className="resume-title">Work experience</h3>
              <h4>Automation Developer - million</h4>
              <h5>Oct 2022 - Dic 2022</h5>

              <p>
                Developed an automated process for streamlining data entry and
                validation using JavaScript and libraries like Puppeteer and
                Cheerio for web scraping and data extraction tasks, reducing
                manual effort and increasing data accuracy, while employing
                Agile methodology to enhance team collaboration and workflow.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">EXTRACURRICULAR</h3>
            <div className="resume-item">
              <h4>Teaching assitant</h4>

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
