import React from "react";
import PropTypes from "prop-types";

/**
 * Why aren't we using GraphQL for this?
 * Check out this issue: https://github.com/gatsbyjs/gatsby/issues/9921
 */
import config from "../data/config.yaml";

export default class HTML extends React.Component {
  render() {
    return (
      <html { ...this.props.htmlAttributes }>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <meta name="generator" content="AwesomeDocs" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:site_name" content={ config.site_name || config.title } />
          <meta property="og:url" content={ config.site_url } />
          <meta property="og:image:width" content="1000" />
          <meta property="og:image:height" content="524" />
          <meta property="og:type" content="website" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color={ config.color || "#3eb0ef" } />
          <meta name="apple-mobile-web-app-title" content={ config.site_name } />
          <meta name="application-name" content={ config.site_name } />
          <meta name="msapplication-TileColor" content="#f8fafc" />
          <meta name="theme-color" content={ config.color || "#3eb0ef" } />

          { this.props.headComponents }
        </head>

        <body { ...this.props.bodyAttributes } id="___awesomedocs">
          { this.props.preBodyComponents }
          <div
            key={ `body` }
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          { this.props.postBodyComponents }
        </body>
      </html>
    );
  }
};

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
