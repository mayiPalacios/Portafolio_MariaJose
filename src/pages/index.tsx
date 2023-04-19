import * as React from "react";
import "../styles/bootstrap.scss";
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby";
import Header from "../components/Header/header";
import SectionAboutMe from "../components/layout/sectionAboutMe";
import SkillsMe from "../components/layout/skillsMe";
import Resume from "../components/layout/resume";
import Portafolio from "../components/layout/portafolio";
import { useEffect } from "react";
import Contact from "../components/layout/contact";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <SectionAboutMe />
      </div>

      <div>
        <SkillsMe />
      </div>

      <div>
        <Resume />
      </div>

      <div>
        <Portafolio />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
