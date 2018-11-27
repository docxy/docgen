import React from "react";

import Link from "../../Link";
import * as AwesomeData from "../../AwesomeData";

export default (props) => (
  <div css={{
    display: "block",
    position: "relative",
    maxWidth: "76rem",
    margin: "4rem auto 0 auto",
    padding: "6rem",
    borderRadius: ".5rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 5px rgba(0,0,0,.02),0 5px 22px -8px rgba(0,0,0,.1)",
    "@media (max-width: 768px)": {
      padding: "4rem",
      borderRadius: 0,
    },
  }}>
    <h4 css={{
      marginTop: "0 !important",
    }}>
      Hey!
      <span role="img" aria-label="hello">👋</span>
      Was this page helpful?
    </h4>
    <div>
      <p>
        We're always looking to make our docs better, please let us know if
        you have any suggestions or advice about what's working and what's
        not!
      </p>
      <div>
        <Link to={ AwesomeData.config.feedback }>
          <button>Send Feedback</button>
        </Link>
      </div>
    </div>
  </div>
);
