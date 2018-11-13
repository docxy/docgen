import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Link from "../Link";

export default (props) => (
  <StaticQuery
    query={graphql`
      query HeaderLinksQuery {
        allLinksYaml {
          links: edges {
            node {
              title
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div css={{
        display: "flex",
        alignItems: "center",
        flex: "1 1 auto",
        overflowX: "auto",
      }}>
        <div css={{
          display: "flex",
          alignItems: "center",
          marginRight: "15px",
          zIndex: 10,
        }}>
          <ul css={{
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}>
            {
              data.allLinksYaml.links.map(({ node }, i) => (
                <Link to={ node.link } key={ i }>
                  <li css={{
                    padding: "10px 15px",
                    display: "inline-block",
                    color: "#5d7079",
                    borderRadius: "3px",
                    background: node.button ? "linear-gradient(45deg, #40C4FB 50%, #62D9FB)" : "none",
                    transform: "translateZ(0px)",
                    transition: "color .2s ease",
                    ":hover": {
                      color: "#3eb0ef",
                    },
                  }}>{ node.title }</li>
                </Link>
              ))
            }
          </ul>
        </div>
      </div>
    )}
  />
);
