import React from "react";

import Copyright from "./Copyright";
import PoweredBy from "./PoweredBy";

export default (props) => (
  <section css={{
    display: "block",
    margin: "4vw auto 0 auto",
    padding: "0 4rem",
    maxWidth: "128rem",
  }}>
    <div css={{
      display: "flex",
      paddingTop: "1.6rem",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px dashed #e5eff5",
      "@media (max-width: 768px)": {
        flexDirection: "column",
      },
    }}>
      <Copyright />
      <PoweredBy />
    </div>
  </section>
);
