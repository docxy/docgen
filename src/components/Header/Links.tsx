import React from "react";
import { FiCompass, FiGithub, FiTwitter } from "react-icons/fi";

import HeaderLink from "./Link";

interface HeaderLinksProps {
    repository: string;
    twitter: string;
    website: string;
}

export default ({ repository, twitter, website }: HeaderLinksProps): React.ReactElement => (
    <div css={{
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        gap: 20,
        fontSize: 25,
        "@media (max-width: 768px)": {
            display: "none",
        },
    }}>
        {
            website && (
                <HeaderLink
                    name={ "Website" }
                    link={ website }
                >
                    <FiCompass />
                </HeaderLink>
            )
        }
        {
            repository && (
                <HeaderLink
                    name={ "Repository" }
                    link={ repository }
                >
                    <FiGithub />
                </HeaderLink>
            )
        }
        {
            twitter && (
                <HeaderLink
                    name={ "Twitter" }
                    link={ twitter }
                >
                    <FiTwitter />
                </HeaderLink>
            )
        }
    </div>
);
