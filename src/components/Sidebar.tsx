import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Link from "./Link";

interface SidebarProps {
    open: boolean;
}

export default ({ open }: SidebarProps): React.ReactElement => {
    const data = useStaticQuery(graphql`
        query SidebarQuery {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
            contentYaml {
                navigation {
                    links {
                        name
                        link
                    }
                    section
                }
            }
        }
    `);

    return (
        <div css={{
            flex: 1,
            minWidth: 250,
            "@media (max-width: 768px)": {
                display: open ? "block" : "none",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                padding: 30,
                backgroundColor: "var(--background)",
                overflowY: "auto",
                zIndex: 69,
            },
        }}>
            <nav css={{
                display: "flex",
                flexDirection: "column",
                gap: 25,
                "@media (min-width: 769px)": {
                    top: 150,
                    position: "sticky",
                },
            }}>
                {
                    data.contentYaml.navigation.map((node: any, i: number) => (
                        <div
                            key={ i }
                            css={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 20,
                            }}
                        >
                            <div css={{
                                fontSize: "1.2em",
                                fontWeight: 500,
                            }}>
                                { node.section }
                            </div>
                            <div css={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 15,
                            }}>
                                {
                                    node.links.map((node: any, i: number) => (
                                        <Link
                                            key={ i }
                                            to={ node.link }
                                            css={{
                                                color: typeof document !== "undefined" && document.location.pathname === node.link ? "var(--accent)" : "var(--gray1)",
                                                fontWeight: typeof document !== "undefined" && document.location.pathname === node.link ? 500 : 400,
                                                ":hover": {
                                                    color: "var(--text)",
                                                },
                                            }}
                                        >
                                            { node.name }
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </nav>
        </div>
    );
};
