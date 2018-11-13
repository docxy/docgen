module.exports = {
  plugins: [
    "gatsby-plugin-glamor",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
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
        ignore: [ "**/\.*" ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: __dirname + "/src/assets/images",
        ignore: [ "**/\.*" ],
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
  ],
};
