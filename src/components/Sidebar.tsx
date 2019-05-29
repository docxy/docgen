import { graphql, Link, StaticQuery } from "gatsby";
import React from "react";


export default (props) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }  
    `}
    render={ data => (
      <div css={{
        display: "block",
        position: "relative",
        width: "22rem",
        paddingRight: "4rem",
        flexShrink: 0,
        "@media (max-width: 768px)": {
          display: "none",
        },
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
                data.allMarkdownRemark.nodes.filter(node => node.fields.slug !== "/404/").map((node: any, i: number) => (
                  <li key={ i } css={{
                    fontSize: "1.45rem",
                    lineHeight: "1.65rem",
                    "& > a.active": {
                      color: "#3eb0ef",
                      fontWeight: 500,
                    }
                  }}>
                    <Link
                      className={ typeof document !== "undefined" && document.location.pathname === node.fields.slug ? "active" : "" }
                      to={ node.fields.slug }
                      css={{
                        display: "inline-block",
                        width: "100%",
                        height: "100%",
                        padding: "6px 0",
                        color: "#738a94",
                        lineHeight: "1.5em",
                      }}
                    >
                      { node.frontmatter.title }
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
