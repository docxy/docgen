import { graphql, useStaticQuery } from "gatsby";

import Branding from "./Branding";
import Links from "./Links";

export default (): React.ReactElement => {
    const data = useStaticQuery(graphql`
        query HeaderLogoQuery {
            contentYaml {
                title
                logo
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
            borderBottom: "2px solid var(--gray6)",
            zIndex: 42,
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
                    name={ data.contentYaml.title }
                    logo={ data.contentYaml.logo }
                />
                <Links
                    links={ data.contentYaml.links }
                />
            </div>
        </header>
    );
};
