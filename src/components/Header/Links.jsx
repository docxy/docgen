import React from "react";

import Link from "../Link";
import * as AwesomeData from "../AwesomeData";

export default (props) => (
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
          AwesomeData.links.map((link, i) => (
            <Link to={ link.link } key={ i }>
              <li css={{
                padding: "10px 15px",
                display: "inline-block",
                color: "#5d7079",
                borderRadius: "3px",
                transform: "translateZ(0px)",
                transition: "color .2s ease",
                ":hover": {
                  color: AwesomeData.config.color || "#3eb0ef",
                },
              }}>{ link.title }</li>
            </Link>
          ))
        }
      </ul>
    </div>
  </div>
);
