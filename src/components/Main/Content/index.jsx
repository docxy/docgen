import React from "react";

import Article from "./Article";
import Feedback from "./Feedback";
import * as AwesomeData from "../../AwesomeData";

export default (props) => (
  <div css={{
    maxWidth: "calc(100% - 22rem)",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
    },
  }}>
    <Article>
      { props.children }
    </Article>
    {
      AwesomeData.config.feedback
      ? <Feedback />
      : <></>
    }
  </div>
);
