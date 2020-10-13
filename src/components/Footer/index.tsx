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
                        to="https://github.com/AwesomeDocs"
                        title="Build awesome documentation sites with AwesomeDocs"
                        css={{
                            opacity: .8,
                        }}
                    >
                        Powered by AwesomeDocs
                    </Link>
                </div>
            </div>
        </footer>
    );
};
