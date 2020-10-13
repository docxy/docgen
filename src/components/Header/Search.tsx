import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import { FiSearch, FiX } from "react-icons/fi";

import Link from "../Link";

export default (): React.ReactElement => {
    const [ query, setQuery ] = React.useState("");
    const [ resultQuery, setResultQuery ] = React.useState("");
    const data = useStaticQuery(graphql`
        query SearchIndexQuery {
            localSearchPages {
                index
                store
            }
        }
    `);
    const results = useFlexSearch(resultQuery, data.localSearchPages.index, data.localSearchPages.store);

    const clearQuery = () => {
        setQuery("");
        setResultQuery("");
    };

    const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const searchQuery = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key.toLowerCase() === "enter") {
            setResultQuery(query);
        }
    };

    return (
        <div css={{
            padding: 5,
            borderRadius: 3,
            backgroundColor: "var(--gray6)",
            transition: "border-color var(--transition-duration) var(--transition-function)",
            border: "2px solid var(--gray5)",
            ":hover": {
                borderColor: "var(--gray4)",
            },
        }}>
            <div css={{
                display: "flex",
                alignItems: "center",
                gap: 5,
            }}>
                <FiSearch color="var(--gray1)" />
                <input
                    type="text"
                    placeholder="Search"
                    value={ query }
                    onKeyUp={ searchQuery }
                    onChange={ handleQuery }
                    css={{
                        backgroundColor: "transparent",
                    }}
                />
                <FiX
                    css={{
                        color: (query || results && results.length) ? "var(--text)" : "var(--gray1)",
                        transition: "color var(--transition-duration) var(--transition-function)",
                        cursor: "pointer",
                        ":hover": {
                            color: "var(--text)",
                        },
                    }}
                    onClick={ clearQuery }
                />
            </div>
            {
                results && !!results.length && (
                    <div css={{
                        position: "fixed",
                        top: 132,
                        left: 0,
                        width: "100vw",
                        height: "calc(100vh - 125px)",
                        backgroundColor: "var(--background)",
                        overflowY: "auto",
                    }}>
                        <div css={{
                            maxWidth: 1300,
                            margin: "0 auto",
                            padding: 25,
                            display: "flex",
                            flexDirection: "column",
                            gap: 20,
                        }}>
                            {
                                results.map(result =>
                                    <Link key={ result.id } to={ result.slug } css={{
                                        color: "var(--gray1)",
                                        ":hover": {
                                            color: "var(--text)",
                                        },
                                    }}>
                                        <div>{ result.title }</div>
                                        <div>{ result.description }</div>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};
