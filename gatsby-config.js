"use strict";

module.exports = {
    plugins: [
        "gatsby-plugin-glamor",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "contents",
                path: __dirname + "/contents/",
                ignore: [ "**/.*" ],
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-prismjs",
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (eg <pre class="language-js">).
                            classPrefix: "language-",
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: true,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: true,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-local-search",
            options: {
                // A unique name for the search index. This should be descriptive of
                // what the index contains. This is required.
                name: "pages",
                // Set the search engine to create the index. This is required.
                // The following engines are supported: flexsearch, lunr
                engine: "flexsearch",
                // Provide options to the engine.
                // Note: Only the flexsearch engine supports options.
                engineOptions: "speed",
                // GraphQL query used to fetch all data for the search index. This is
                // required.
                query: `{
                    allMarkdownRemark {
                        nodes {
                            id
                            fields{
                                slug
                            }
                            frontmatter {
                                title
                                description
                            }
                            rawMarkdownBody
                        }
                    }
                }`,
                // Field used as the reference value for each document.
                // Default: "id".
                ref: "id",
                // List of keys to index. The values of the keys are taken from the
                // normalizer function below.
                // Default: all fields
                index: [ "title", "body", "description" ],
                // List of keys to store and make available in the UI. The values of
                // the keys are taken from the normalizer function below.
                // Default: all fields
                store: [ "id", "slug", "title", "description" ],
                // Function used to map the result from the GraphQL query. This should
                // return an array of items to index in the form of flat objects
                // containing properties to index. The objects must contain the `ref`
                // field above (default: 'id'). This is required.
                normalizer: ({ data }) => data.allMarkdownRemark.nodes.filter(node => node.fields.slug !== "/404/").map(node => ({
                    id: node.id,
                    slug: node.fields.slug,
                    title: node.frontmatter.title,
                    description: node.frontmatter.description,
                    body: node.rawMarkdownBody,
                })),
            },
        },
        "gatsby-transformer-yaml",
        "gatsby-plugin-typescript",
    ],
};
