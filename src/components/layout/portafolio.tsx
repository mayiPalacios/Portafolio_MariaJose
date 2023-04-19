import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImageProps, StaticImage, getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

interface ProjectData {
  title: string;
  img: any;
  url: string;
  layout: string;
  tags: string[];
}

type QueryDataType = {
  allDataJson: {
    nodes: [
      {
        users: [
          {
            title: string;
            img: any;
            url: string;
            layout: string;
            tags: [];
          }
        ];
      }
    ];
  };
};

const Portafolio = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const data = useStaticQuery<QueryDataType>(graphql`
    query {
      allDataJson {
        nodes {
          users {
            title
            img {
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED)
              }
            }
            url
            layout
            tags
          }
        }
      }
    }
  `);

  useEffect(() => {
    setProjects(data.allDataJson.nodes[0].users);
  }, [data]);

  const handleFilterClick = (tag: string) => {
    setActiveTag(tag);
  };

  const filteredProjects = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag as string))
    : projects;
  console.log(data.allDataJson.nodes[0].users[0].img);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portafolio</h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li
                className="filter-active"
                onClick={() => handleFilterClick("")}
              >
                <span>All</span>
              </li>
              <li
                className="filter-active"
                onClick={() => handleFilterClick("js")}
              >
                <span>JS</span>
              </li>
              <li
                className="filter-active"
                onClick={() => handleFilterClick("ts")}
              >
                <span> TS</span>
              </li>
              <li
                className="filter-active"
                onClick={() => handleFilterClick("testing")}
              >
                <span>Testing</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container ">
          {filteredProjects.map((data) => (
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app  mb-4 "
              style={{ height: "30vh" }}
            >
              <div id="imagen" className="portfolio-wrap  mb-4">
                <a
                  id="info"
                  className="container__data--projects "
                  href={data.url}
                >
                  <GatsbyImage
                    style={{ height: "30vh" }}
                    alt=""
                    image={getImage(data.img)!}
                    className="img-fluid img__project"
                  ></GatsbyImage>
                  <div className="portfolio-info  container__tittle ">
                    <h4 className="title__project">{data.title}</h4>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
