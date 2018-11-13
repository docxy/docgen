import React from "react";

import Link from "../../Link";
import AwesomeIcon from "../../AwesomeIcon";

export default (props) => (
  <Link
    to="https://github.com/AwesomeDocs"
    title="Build awesome documentation sites with AwesomeDocs"
    css={{
      display: "flex",
      alignItems: "center",
      filter: "saturate(0%)",
      opacity: .5,
      transition: "filter .2s ease-in, opacity .2s ease-in",
      ":hover": {
        opacity: 1,
        filter: "saturate(100%)",
      },
    }}
  >
    <span css={{
      marginRight: 8,
    }}>
      Powered by
    </span>
    <AwesomeIcon size={ 25 } />
  </Link>
);
