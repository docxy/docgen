import React from "react";

import Link from "../Link";

interface HeaderLink {
    name: string;
    link: string;
}

export default ({ children, name, link }: React.PropsWithChildren<HeaderLink>): React.ReactElement => (
    <Link
        to={ link }
        title={ name }
        css={{
            color: "var(--gray1)",
            ":hover": {
                color: "var(--text)",
            },
        }}
    >
        { children }
    </Link>
);
