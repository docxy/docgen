import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Link from "../Link";

export default (): React.ReactElement => {
    const data = useStaticQuery(graphql`
        query {
            contentsYaml {
                copyright
            }
        }
    `);

    return (
        <footer css={{
            borderTop: "2px solid var(--gray6)",
        }}>
            <div css={{
                maxWidth: 1300,
                margin: "0 auto",
                padding: "25px 50px",
                textAlign: "center",
                color: "var(--gray1)",
            }}>
                { data.contentsYaml.copyright }
            </div>

            <div css={{
                backgroundColor: "var(--black)",
                color: "var(--white)",
                textAlign: "center",
                fontWeight: 500,
            }}>
                <div css={{
                    maxWidth: 1300,
                    margin: "0 auto",
                    padding: "20px 25px",
                }}>
                    <Link
                        to="https://docxy.traction.one"
                        title="Build awesome documentation sites with Docxy"
                        css={{
                            opacity: .8,
                            transition: "opacity var(--transition-duration) var(--transition-function)",
                            ":hover": {
                                opacity: 1,
                            },
                        }}
                    >
                        Powered by Docxy
                    </Link>
                </div>
            </div>
        </footer>
    );
};
