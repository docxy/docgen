import React from "react";

import Link from "../Link";
import * as AwesomeData from "../AwesomeData";

export default (props) => (
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
            AwesomeData.navigation.map((link, i) => (
              <li key={ i } css={{
                fontSize: "1.45rem",
                lineHeight: "1.65rem",
                "& > a.active": {
                  color: AwesomeData.config.color || "#3eb0ef",
                  fontWeight: 500,
                }
              }}>
                <Link
                  className={ typeof document !== "undefined" && document.location.pathname === link.link ? "active" : "" }
                  to={ link.link }
                  css={{
                    display: "inline-block",
                    width: "100%",
                    height: "100%",
                    padding: "6px 0",
                    color: "#738a94",
                    lineHeight: "1.5em",
                  }}
                >
                  { link.title }
                </Link>
              </li>
            ))
          }
        </ol>
      </nav>
    </div>
  </div>
);
