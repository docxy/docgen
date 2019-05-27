"use strict";

module.exports = {
  plugins: [
    "gatsby-plugin-glamor",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: __dirname + "/content/",
        ignore: [ "**/\.*" ],
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-yaml",
    "gatsby-plugin-typescript",
  ],
};
