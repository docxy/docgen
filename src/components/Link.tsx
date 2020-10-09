import { Link as GatsbyLink } from "gatsby";
import React from "react";

interface LinkProps {
    to: string;
}

const Link: React.FunctionComponent<LinkProps> = ({ children, to, ...props }) => {
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
            rel="noopener noreferrer"
            { ...props }
        >
            { children }
        </a>
    );
};

export default Link;
