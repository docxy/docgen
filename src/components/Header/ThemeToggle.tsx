import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

export default (): React.ReactElement => (
    <ThemeToggler>
        {
            ({ theme, toggleTheme }: { theme: string; toggleTheme: (theme: string) => void }) => (
                <div
                    css={{
                        transition: "color var(--transition-duration) var(--transition-function)",
                        cursor: "pointer",
                        color: "var(--gray1)",
                        ":hover": {
                            color: "var(--text)",
                        },
                    }}
                    onClick={ () => toggleTheme(theme === "light" ? "dark" : "light") }
                >
                    { theme === "dark" ? <FiSun /> : <FiMoon /> }
                </div>
            )
        }
    </ThemeToggler>
);
