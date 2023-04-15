import * as React from "react";
import "../styles/bootstrap.scss";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return <div></div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
