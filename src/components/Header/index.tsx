import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Branding from "./Branding";
import HeaderLink, { HeaderLinkProps } from "./Link";
import Links from "./Links";
import Search from "./Search";

export default (): React.ReactElement => {
    const data = useStaticQuery(graphql`
        query HeaderLogoQuery {
            contentsYaml {
                title
                logo
                repository
                twitter
                website
                links {
                    name
                    link
                }
            }
        }
    `);

    return (
        <header css={{
            top: 0,
            position: "sticky",
            width: "100%",
            backgroundColor: "var(--background)",
            zIndex: 42,
        }}>
            <div css={{
                borderBottom: "2px solid var(--gray6)",
            }}>
                <div css={{
                    maxWidth: 1300,
                    margin: "0 auto",
                    padding: "20px 25px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontWeight: 500,
                }}>
                    <Branding
                        name={ data.contentsYaml.title }
                        logo={ data.contentsYaml.logo }
                    />
                    <Links
                        repository={ data.contentsYaml.repository }
                        twitter={ data.contentsYaml.twitter }
                        website={ data.contentsYaml.website }
                    />
                </div>
            </div>
            <div css={{
                backgroundColor: "var(--gray6)",
                borderBottom: "2px solid var(--gray5)",
                overflowX: "auto",
            }}>
                <div css={{
                    maxWidth: 1300,
                    margin: "0 auto",
                    padding: "10px 25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 20,
                    fontWeight: 500,
                }}>
                    <div css={{
                        display: "flex",
                        alignItems: "center",
                        gap: 20,
                    }}>
                        {
                            data.contentsYaml.links && data.contentsYaml.links.map((node: HeaderLinkProps, i: number) => (
                                <HeaderLink
                                    key={ i }
                                    link={ node.link }
                                    css={{
                                        color: "var(--gray1)",
                                        ":hover": {
                                            color: "var(--text)",
                                        },
                                    }}
                                >
                                    { node.name }
                                </HeaderLink>
                            ))
                        }
                    </div>
                    <Search />
                </div>
            </div>
        </header>
    );
};
