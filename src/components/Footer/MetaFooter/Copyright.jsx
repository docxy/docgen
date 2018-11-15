import React from "react";

import * as AwesomeData from "../../AwesomeData";

export default (props) => (
  <div css={{
    opacity: .5,
  }}>
    { AwesomeData.config.copyright }
  </div>
);
