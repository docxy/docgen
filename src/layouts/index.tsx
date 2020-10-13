import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

import "../styles/normalize.css";
import "../styles/fonts.css";
import "../styles/base.css";

interface DefaultLayoutProps {
    title: string;
    description: string;
}

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({ children, title, description }) => {
    const data = useStaticQuery(graphql`
        query DefaultLayoutQuery {
            contentsYaml {
                title
                description
            }
        }
    `);

    return (
        <>
            <Helmet
                defaultTitle={ data.contentsYaml.title }
                title={ title || data.contentsYaml.title }
                titleTemplate={ "%s - " + data.contentsYaml.title }
            >
                <meta name="description" content={ description || data.contentsYaml.description } />
            </Helmet>
            <Header />
            <Main>
                { children }
            </Main>
            <Footer />
        </>
    );
};

export default DefaultLayout;
