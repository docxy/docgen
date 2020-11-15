import React from "react";

interface HTMLProps {
    htmlAttributes: Record<string, unknown>;
    headComponents: React.Component[];
    bodyAttributes: Record<string, unknown>;
    preBodyComponents: React.Component[];
    body: string;
    postBodyComponents: React.Component[];
}

export default (
    props: React.PropsWithChildren<HTMLProps>,
): React.ReactElement => (
    <html lang="en" {...props.htmlAttributes}>
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />

            <meta name="generator" content="Docxy" />

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="shortcut icon"
                type="image/png"
                sizes="32x32"
                href="/favicon.ico"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="theme-color" content="#000000" />

            { props.headComponents }
        </head>
        <body id="___docxy" { ...props.bodyAttributes }>
            { props.preBodyComponents }
            <div
                key={ "body" }
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: props.body }}
            />
            { props.postBodyComponents }
        </body>
    </html>
);
