import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

type QueryDataType = {
  allDataJson: {
    nodes: [
      {
        users: [
          {
            title: string;
          }
        ];
      }
    ];
  };
};

const Portafolio = () => {
  const data = useStaticQuery<QueryDataType>(graphql`
    query {
      allDataJson {
        nodes {
          users {
            title
          }
        }
      }
    }
  `);

  console.log(data.allDataJson.nodes[0]);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portafolio</h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">JS</li>
              <li data-filter=".filter-card">TS</li>
              <li data-filter=".filter-web">Testing</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {data.allDataJson.nodes[0].users.map((data) => (
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>{data.title}</h4>
                  <p>App</p>
                </div>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
