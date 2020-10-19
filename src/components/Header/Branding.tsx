import React from "react";

import Link from "../Link";

interface HeaderBrandingProps {
    name: string;
    logo?: string;
}

export default ({ name, logo }: HeaderBrandingProps): React.ReactElement => (
    <div css={{
        display: "flex",
        alignItems: "center",
        lineHeight: "1.9em",
    }}>
        <Link to="/">
            {
                logo
                    ? <img
                        src={ logo }
                        height="32"
                        width="auto"
                        alt={ name }
                        css={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    />
                    : name
            }
        </Link>

        <div css={{
            // Workaround for Safari, as it doesn't support flex `gap`.
            margin: "0 20px",
            color: "var(--gray3)",
        }}>/</div>

        <Link to="/">Docs</Link>
    </div>
);
