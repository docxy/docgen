"use strict";

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "pages" });
        createNodeField({
            node,
            name: "slug",
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise(resolve => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve("./src/templates/page.tsx"),
                    context: {
                        slug: node.fields.slug,
                    },
                });
            });
            resolve();
        });
    });
};

exports.createSchemaCustomization = ({ actions }) => {
    const typeDefs = `
        type ContentYaml implements Node {
            title: String!
            description: String!
            copyright: String
            logo: String
            website: String
            repository: String
            twitter: String
            navigation: [ContentNavigation!]
            links: [ContentNavigationLink!]
        }
        type ContentNavigation {
            section: String!
            links: [ContentNavigationLink!]!
        }
        type ContentNavigationLink {
            name: String!
            link: String!
        }
    `;

    actions.createTypes(typeDefs);
};
