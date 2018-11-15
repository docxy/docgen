module.exports = {
  plugins: [
    "gatsby-plugin-glamor",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: __dirname + "/content/",
        ignore: [ "**/\.*" ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: __dirname + "/data/",
        ignore: [ "**/\.*", "**/*.example.*" ],
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-yaml",
  ],
};
