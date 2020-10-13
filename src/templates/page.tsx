import React from "react";
import { graphql } from "gatsby";

import Layout from "../layouts/index";

interface PageQuery {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string;
                description: string;
            };
            html: string;
        };
    };
}

export default (props: React.PropsWithChildren<PageQuery>): React.ReactElement => (
    <Layout
        title={ props.data.markdownRemark.frontmatter.title }
        description={ props.data.markdownRemark.frontmatter.description }
    >
        <h1>{ props.data.markdownRemark.frontmatter.title }</h1>
        <p>{ props.data.markdownRemark.frontmatter.description }</p>
        <hr />
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
