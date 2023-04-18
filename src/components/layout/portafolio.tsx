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
                data-filter="*"
                className="filter-active"
                onClick={() => handleFilterClick("")}
              >
                All
              </li>
              <li
                data-filter=".filter-app"
                onClick={() => handleFilterClick("js")}
              >
                JS
              </li>
              <li
                data-filter=".filter-card"
                onClick={() => handleFilterClick("ts")}
              >
                TS
              </li>
              <li
                data-filter=".filter-web"
                onClick={() => handleFilterClick("testing")}
              >
                Testing
              </li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container ">
          {filteredProjects.map((data) => (
            <div className="col-lg-4 col-md-6 portfolio-item filter-app  mb-1 ">
              <div id="imagen" className="portfolio-wrap">
                <a id="info" className="nuestrocontenedor" href={data.url}>
                  <GatsbyImage
                    alt=""
                    image={getImage(data.img)!}
                    className="img-fluid nuestraimagen"
                  ></GatsbyImage>
                  <div className="portfolio-info  nuestrobloque ">
                    <h4 className="nuestrotexto">{data.title}</h4>
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
