import React from "react";

import Link from "../Link";

export interface HeaderLinkProps {
    name: string;
    link: string;
};

export default ({ children, name, link }: React.PropsWithChildren<HeaderLinkProps>): React.ReactElement => (
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
