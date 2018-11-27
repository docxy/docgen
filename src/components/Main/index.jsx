import React from "react";

import Sidebar from "./Sidebar";
import Content from "./Content";

export default (props) => (
  <main css={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "relative",
    margin: "9.8rem auto 0 auto",
    padding: "0 4rem 4rem 4rem",
    minHeight: "100vh",
    maxWidth: "128rem",
    "@media (max-width: 768px)": {
      padding: "0 0 4rem 0",
    },
  }}>
    <Sidebar />
    <Content>
      { props.children }
    </Content>
  </main>
);
