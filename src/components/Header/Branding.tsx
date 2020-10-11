import Link from "../Link";

interface HeaderBrandingProps {
    name: string;
    logo?: string;
}

export default ({ name, logo }: HeaderBrandingProps): React.ReactElement => (
    <div css={{
        display: "flex",
        alignItems: "center",
        gap: 20,
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

        <div css={{ color: "var(--gray3)" }}>/</div>

        <Link to="/">Docs</Link>
    </div>
);
