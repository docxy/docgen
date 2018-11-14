import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

import "./normalize.css";
import "./index.css";

export default (props) => (
  <StaticQuery
    query={graphql`
      query SiteConfigQuery {
        config: dataYaml {
          title
          description
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={ data.config.title }
          description= { data.config.description }
        />
        <Header />
        <Main>
          { props.children }
        </Main>
        <Footer />
      </>
    )}
  />
);
