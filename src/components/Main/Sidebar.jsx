import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Link from "../Link";

export default (props) => (
  <StaticQuery
    query={graphql`
      query SidebarLinksQuery {
        allNavigationYaml {
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
        display: "block",
        position: "relative",
        width: "22rem",
        paddingRight: "4rem",
        flexShrink: 0,
      }}>
        <div css={{
          marginRight: "-1.2rem",
          position: "sticky",
          top: "10rem",
        }}>
          <nav css={{
            display: "block",
          }}>
            <ol css={{
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}>
              {
                data.allNavigationYaml.links.map(({ node }, i) => (
                  <li key={ i } css={{
                    fontSize: "1.45rem",
                    lineHeight: "1.65rem",
                    "& > a.active": {
                      color: "#3eb0ef",
                      fontWeight: 500,
                    }
                  }}>
                    <Link
                      className={ document.location.pathname === node.link ? "active" : "" }
                      to={ node.link }
                      css={{
                        display: "inline-block",
                        width: "100%",
                        height: "100%",
                        padding: "6px 0",
                        color: "#738a94",
                        lineHeight: "1.5em",
                      }}
                    >
                      { node.title }
                    </Link>
                  </li>
                ))
              }
            </ol>
          </nav>
        </div>
      </div>
    )}
  />
);
