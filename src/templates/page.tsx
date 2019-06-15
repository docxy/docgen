import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

import Layout from "../layouts/index";

export default (props: any) => (
  <Layout>
    <Helmet
      title={ props.data.markdownRemark.frontmatter.title }
    >
      <meta name="description" content={ props.data.markdownRemark.frontmatter.description } />
    </Helmet>
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
