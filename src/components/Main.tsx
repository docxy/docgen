import React from "react";
import { PageProps } from "gatsby";

import Content from "./Content";
import Sidebar from "./Sidebar";
import SidebarToggle from "./SidebarToggle";

export default ({ children }: PageProps): React.ReactElement => {
    const [ sidebarStatus, setSidebarStatus ] = React.useState(false);

    return (
        <main css={{
            maxWidth: 1300,
            minHeight: "calc(100vh)",
            margin: "0 auto",
            padding: 25,
            display: "flex",
            gap: 25,
        }}>
            <Sidebar open={ sidebarStatus } />
            <Content>
                { children }
            </Content>
            <SidebarToggle open={ sidebarStatus } onClickHandler={ () => setSidebarStatus(!sidebarStatus) } />
        </main>
    );
}
