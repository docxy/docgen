import React from "react";

import MetaFooter from "./MetaFooter";
import FooterLinks from "./FooterLinks";

export default (props) => (
  <footer css={{
    display: "block",
    padding: "4vw 0",
    borderTop: "1px solid #e5eff5",
    backgroundColor: "#ffffff",
  }}>
    <FooterLinks />
    <MetaFooter />
  </footer>
);
