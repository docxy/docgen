import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

export default (props) => (
  <StaticQuery
    query={graphql`
      query SiteMetaQuery {
        config: dataYaml {
          title
          description
        }
      }
    `}
    render={data => (
      <Helmet
        defaultTitle={ data.config.site_name }
        titleTemplate={
          data.config.site_name
          ? "%s - " + data.config.site_name
          : "%s"
        }
        title={ props.title }
        meta={[
          {
            name: "twitter:title",
            property: "og:title",
            content: props.title || data.config.title
          },
          {
            name: "description",
            content: props.description || data.config.description
          },
          {
            name: "twitter:description",
            property: "og:description",
            content: props.description || data.config.description
          }
        ]}
      />
    )}
  />
);
