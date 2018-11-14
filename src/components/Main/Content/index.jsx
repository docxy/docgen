import React from "react";

import Article from "./Article";
import Feedback from "./Feedback";

export default (props) => (
  <div>
    <Article>
      { props.children }
    </Article>
    <Feedback />
  </div>
);
