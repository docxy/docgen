import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

import "./normalize.css";
import "./index.css";

export default (props) => (
  <StaticQuery
    query={graphql`
      query DefaultLayoutQuery {
        contentYaml {
          title
          description
        }
      }  
    `}
    render={ data => (
      <>
        <Helmet
          title={ data.contentYaml.title }
        >
          <meta name="description" content={ data.contentYaml.description } />
        </Helmet>
        <Header />
        <Main>
          { props.children }
        </Main>
        <Footer />
      </>
    )}
  />
);
