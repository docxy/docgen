import React from "react";

import HeaderLinks from "./Links";
import HeaderLogo from "./Logo";

export default (props) => (
  <header css={{
    display: "block",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    marginBottom: "4rem",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 0 3px rgba(0,0,0,.03),0 3px 46px rgba(0,0,0,.07)",
    zIndex: 500,
    opacity: .95,
  }}>
    <div css={{
      display: "flex",
      maxWidth: "128rem",
      margin: "0 auto",
      padding: ".8rem 4rem",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "noWrap",
      flex: "1 1 auto",
    }}>
      <HeaderLogo />
      <HeaderLinks />
    </div>
  </header>
);
