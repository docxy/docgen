import React from "react";

import Link from "../Link";
import * as AwesomeData from "../AwesomeData";

export default (props) => (
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
        AwesomeData.config.logo
        ? <img
            src={ AwesomeData.config.logo }
            height="25"
            width="auto"
            alt="Logo"
            css={{
              display: "flex",
              alignItems: "center",
            }}
          />
        : AwesomeData.config.title
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
);
