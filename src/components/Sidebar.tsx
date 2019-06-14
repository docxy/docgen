import { graphql, Link, StaticQuery } from "gatsby";
import React from "react";

interface ISidebarItemProps {
  title: string;
  link: string;
}

const SidebarItem: React.FunctionComponent<ISidebarItemProps> = ({ title, link }) => (
  <li css={{
    fontSize: "1.45rem",
    lineHeight: "1.65rem",
    "& > a.active": {
      color: "#3eb0ef",
      fontWeight: 500,
    }
  }}>
    <Link
      className={ typeof document !== "undefined" && document.location.pathname === link ? "active" : "" }
      to={ link }
      css={{
        display: "inline-block",
        width: "100%",
        height: "100%",
        padding: "6px 0",
        color: "#738a94",
        lineHeight: "1.5em",
      }}
    >
      { title }
    </Link>
  </li>
);


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
                data.allMarkdownRemark.nodes.filter((node: any) => node.fields.slug !== "/404/").map((node: any, i: number) => (
                  <SidebarItem key={ i } title={ node.frontmatter.title } link={ node.fields.slug } />
                ))
              }
            </ol>
          </nav>
        </div>
      </div>
    )}
  />
);
