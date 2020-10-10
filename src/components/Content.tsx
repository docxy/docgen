import React from "react";

export default ({ children }: React.PropsWithChildren<{ s: string; }>): React.ReactElement => (
    <article css={{
        flex: 3,
        lineHeight: "2rem",
        overflowX: "auto",
        "& a": {
            color: "var(--accent)",
            borderBottom: "1px solid transparent",
            fontWeight: 500,
            transition: "color var(--transition-duration) var(--transition-function), border-color var(--transition-duration) var(--transition-function)",
            ":hover": {
                color: "var(--accent-alt)",
                borderColor: "var(--accent-alt)",
            },
        },
        "& abbr[title]": {
            textDecoration: "none",
            borderBottom: "2px dotted var(--gray3)",
        },
        "& blockquote": {
            margin: "20px 0",
            padding: 20,
            backgroundColor: "var(--gray6)",
            borderRadius: 3,
        },
        "& blockquote p": {
            margin: 0,
        },
        "& hr": {
            border: "none",
            width: 50,
            height: 3,
            borderRadius: 2,
            backgroundColor: "var(--gray5)",
            margin: "50px auto",
        },
        "& img": {
            borderRadius: 3,
            display: "flex",
            maxWidth: "100%",
            margin: "0 auto",
        },
        "& kbd": {
            display: "inline-block",
            padding: "0px 8px",
            borderRadius: 3,
            border: "2px solid var(--gray5)",
            backgroundColor: "var(--gray6)",
            boxShadow: "0px 4px 0 0 var(--gray5)",
            transform: "translateY(-3px)",
            transition: "transform var(--transition-duration) var(--transition-function), box-shadow var(--transition-duration) var(--transition-function)",
            cursor: "pointer",
        },
        "& kbd:active": {
            transform: "translateY(0px)",
            boxShadow: "0px 1px 0 0 var(--gray5)",
        },
        "& note": {
            display: "block",
            margin: "20px 0",
            padding: 20,
            backgroundColor: "var(--gray6)",
            borderRadius: 3,
        },
        "& note:before": {
            content: "attr(type)",
            display: "block",
            fontWeight: 500,
            textTransform: "uppercase",
        },
        "& note[type=bug]:before, & note[type=danger]:before, & note[type=error]:before": {
            color: "var(--error)",
        },
        "& note[type=tip]:before, & note[type=info]:before": {
            color: "var(--info)",
        },
        "& note[type=success]:before": {
            color: "var(--success)",
        },
        "& note[type=warn]:before, & note[type=warning]:before": {
            color: "var(--warning)",
        },
        "& pre, & code": {
            padding: "3px 5px",
            borderRadius: 3,
            backgroundColor: "var(--gray6)",
        },
        "& pre": {
            overflowX: "auto",
        },
        "& pre code": {
            padding: 0,
            backgroundColor: "transparent",
        },
        "& .gatsby-highlight": {
            margin: "20px 0",
            padding: 20,
            backgroundColor: "var(--gray6)",
            borderRadius: 3,
            overflow: "auto",
        },
        "& .gatsby-highlight pre[class*=language-]": {
            margin: 0,
            padding: 0,
            backgroundColor: "transparent",
            float: "left",
        },
        "& .gatsby-highlight code[class*=language-]": {
            color: "var(--text)",
        },
        "& .gatsby-highlight pre[class*=language-].line-numbers": {
            paddingLeft: 40,
        },
        "& .gatsby-highlight pre[class*=language-].line-numbers .line-numbers-rows": {
            borderColor: "var(--gray5)",
        },
    }}>
        { children }
    </article>
);
