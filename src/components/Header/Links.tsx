import Link from "../Link";

interface HeaderLink {
    name: string;
    link: string;
}

interface HeaderLinksProps {
    links: HeaderLink[];
}

export default ({ links }: HeaderLinksProps): React.ReactElement => (
    <div css={{
        listStyle: "none",
        display: "flex",
        gap: 20,
        "@media (max-width: 768px)": {
            display: "none",
        },
    }}>
        {
            links && links.map((node: HeaderLink, i: number) => (
                <li key={ i }>
                    <Link to={ node.link } css={{
                        color: "var(--gray1)",
                        ":hover": {
                            color: "var(--text)",
                        },
                    }}>
                        { node.name }
                    </Link>
                </li>
            ))
        }
    </div>
);
