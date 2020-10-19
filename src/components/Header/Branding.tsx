import React from "react";
import { IoIosArrowForward } from "react-icons/io";

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
            display: "flex",
            alignItems: "center",
            color: "var(--gray2)",
            // Workaround for Safari, as it doesn't support flex `gap`.
            margin: "0 10px",
        }}>
            <IoIosArrowForward />
        </div>

        <Link to="/">Docs</Link>
    </div>
);
