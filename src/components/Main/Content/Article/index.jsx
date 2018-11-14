import React from "react";

export default (props) => (
  <div css={{
    width: "100%",
    maxWidth: "76rem",
    borderRadius: ".5rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 5px rgba(0,0,0,.02),0 5px 22px -8px rgba(0,0,0,.1)",
  }}>
    <article css={{
      padding: "4rem 6rem",
      flex: "1 1 auto",
      lineHeight: "2rem",
      "& a": {
        color: "#3eb0ef",
        fontWeight: 500,
        position: "relative",
        "::before": {
          content: " ",
          position: "absolute",
          bottom: -4,
          left: 0,
          width: "100%",
          height: 1,
          opacity: 0,
          backgroundColor: "#3eb0ef",
          transition: "width 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        },
        "::after": {
          content: " ",
          position: "absolute",
          bottom: -4,
          left: 0,
          right: 0,
          height: 1,
          backgroundColor: "rgba(62, 176, 239, .1)",
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
