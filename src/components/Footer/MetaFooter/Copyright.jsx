import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default (props) => (
  <StaticQuery
    query={graphql`
      query CopyrightQuery {
        config: dataYaml {
          copyright
        }
      }
    `}
    render={data => (
      <div css={{
        opacity: .5,
      }}>
        { data.config.copyright }
      </div>
    )}
  />
);
