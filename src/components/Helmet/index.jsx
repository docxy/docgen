import React from "react";
import Helmet from "react-helmet";

import * as AwesomeData from "../AwesomeData";

export default (props) => (
  <Helmet
    defaultTitle={ AwesomeData.config.site_name }
    titleTemplate={
      AwesomeData.config.site_name
      ? "%s - " + AwesomeData.config.site_name
      : "%s"
    }
    title={ props.title }
    meta={[
      {
        name: "twitter:title",
        property: "og:title",
        content: props.title || AwesomeData.config.title
      },
      {
        name: "description",
        content: props.description || AwesomeData.config.description
      },
      {
        name: "twitter:description",
        property: "og:description",
        content: props.description || AwesomeData.config.description
      }
    ]}
  />
);
