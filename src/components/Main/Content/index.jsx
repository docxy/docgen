import React from "react";

import Article from "./Article";
import Feedback from "./Feedback";
import * as AwesomeData from "../../AwesomeData";

export default (props) => (
  <div>
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
