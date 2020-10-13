import React from "react";
import { Link as GatsbyLink } from "gatsby";

interface LinkProps {
    to: string;
    [key: string]: string;
}

export default ({ children, to, ...props }: React.PropsWithChildren<LinkProps>): React.ReactElement => {
    if (to === "") {
        return (
            <a { ...props }>
                { children }
            </a>
        );
    }

    const internal = /^\/(?!\/)/.test(to);

    if (internal) {
        return (
            <GatsbyLink to={ to } { ...props }>
                { children }
            </GatsbyLink>
        );
    }

    return (
        <a
            href={ to }
            target="_blank"
            rel="noopener"
            { ...props }
        >
            { children }
        </a>
    );
};
