import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Link from "../Link";

export default (props) => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        config: dataYaml {
          title
          logo
        }
      }
    `}
    render={data => (
      <div css={{
        display: "flex",
        position: "relative",
        width: "22rem",
        padding: "1.2rem 0",
        paddingRight: "3.2rem",
        alignItems: "center",
      }}>
        <Link to="/" css={{
          position: "relative",
        }}>
          {
            data.config.logo
            ? <img
                src={ data.config.logo }
                height="25"
                width="auto"
                alt="Logo"
                css={{
                  display: "flex",
                }}
              />
            : data.config.title
          }
        </Link>

        <Link to="/" css={{
          position: "relative",
          marginLeft: "1.6rem",
          paddingLeft: "1.6rem",
          ":before": {
            content: " ",
            position: "absolute",
            top: -3.5,
            left: 1,
            display: "block",
            width: 1,
            height: 23,
            background: "#d3e4ee",
            transform: "rotate(25deg)",
          },
        }}>
          Docs
        </Link>
      </div>
    )}
  />
);
