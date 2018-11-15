import React from "react";
import Helmet from "react-helmet";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import * as AwesomeData from "../../components/AwesomeData";

import "./normalize.css";
import "./index.css";

export default (props) => (
  <>
    <Helmet
      title={ AwesomeData.config.title }
      description= { AwesomeData.config.description }
    />
    <Header />
    <Main>
      { props.children }
    </Main>
    <Footer />
  </>
);
