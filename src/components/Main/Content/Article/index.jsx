import React from "react";

import "./index.css";
import * as AwesomeData from "../../../AwesomeData";

export default (props) => (
  <div css={{
    width: "100%",
    maxWidth: "76rem",
    borderRadius: ".5rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 5px rgba(0,0,0,.02),0 5px 22px -8px rgba(0,0,0,.1)",
    "@media (max-width: 768px)": {
      borderRadius: 0,
    },
  }}>
    <article css={{
      padding: "4rem 6rem",
      flex: "1 1 auto",
      lineHeight: "2rem",
      "@media (max-width: 768px)": {
        padding: "4rem",
      },
      "& a": {
        color: AwesomeData.config.color || "#3eb0ef",
        fontWeight: 500,
        position: "relative",
        "::before": {
          content: " ",
          position: "absolute",
          bottom: -4,
          left: 0,
          width: "100%",
          height: 1.5,
          opacity: 0,
          backgroundColor: AwesomeData.config.color || "#3eb0ef",
          transition: "width 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        },
        "::after": {
          content: " ",
          position: "absolute",
          bottom: -4,
          left: 0,
          right: 0,
          height: 1.5,
          backgroundColor: AwesomeData.config.color || "#3eb0ef",
          opacity: .1,
        },
        ":hover::before": {
          opacity: 1,
          width: "42%",
        },
      },
    }}>
      { props.children }
    </article>
  </div>
);
