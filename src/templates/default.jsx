import React from "react";
import { graphql } from "gatsby";

import Layout from "../layouts/default";
import Helmet from "../components/Helmet";

export default (props) => (
  <Layout>
    <Helmet
      title={ props.data.markdownRemark.frontmatter.title }
      description={ props.data.markdownRemark.frontmatter.description }
    />
    <h1>{ props.data.markdownRemark.frontmatter.title }</h1>
    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
