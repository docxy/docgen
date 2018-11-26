import React from "react";

import Link from "../../Link";
import * as AwesomeData from "../../AwesomeData";

export default (props) => (
  <section css={{
    // display: "grid",
    // gridTemplateColumns: "repeat(12,1fr)",
    // gridTemplateRows: "fit-content",
    margin: "0 auto",
    padding: "0 4rem",
    maxWidth: "128rem",

    textAlign: "center",
  }}>
    { /* TODO: Add footer links support */ }

    <Link
      onClick={ () => window.scroll({ top: 0, behavior: "smooth" }) }
      css={{
        position: "relative",
        cursor: "pointer",
      }}
    >
      {
        AwesomeData.config.logo
        ? <img
            src={ AwesomeData.config.logo }
            height="50"
            width="auto"
            alt="Back to top"
            title="Back to top"
            css={{
              // display: "flex",
              // alignItems: "center",
            }}
          />
        : "Back to Top"
      }
    </Link>
  </section>
);
