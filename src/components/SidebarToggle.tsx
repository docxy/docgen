import React from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface ISidebarToggleProps {
    open: boolean;
    onClickHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default  ({ open, onClickHandler }: React.PropsWithChildren<ISidebarToggleProps>): React.ReactElement => (
    <div
        css={{
            position: "fixed",
            width: 72,
            height: 72,
            top: 0,
            right: 0,
            display: "none",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 666,
            cursor: "pointer",
            fontSize: "1.5em",
            "@media (max-width: 768px)": {
                display: "flex",
            },
        }}
        onClick={ onClickHandler }
        title={ open ? "Close Sidebar" : "Open Sidebar" }
    >
        { open ? <FiX /> : <FiMenu /> }
    </div>
);
