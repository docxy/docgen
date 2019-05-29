import { graphql, Link, StaticQuery } from "gatsby";
import React from "react";


// Header logo

interface IHeaderLogoProps {
  title: string;
  logo: string;
}

const HeaderLogo: React.FunctionComponent<IHeaderLogoProps> = (props: IHeaderLogoProps) => (
  <div css={{
    display: "flex",
    position: "relative",
    width: "22rem",
    padding: "1.2rem 0",
    paddingRight: "3.2rem",
    alignItems: "center",
  }}>
    <Link to="/" css={{
      position: "relative",
    }}>
      {
        props.logo
        ? <img
            src={ props.logo }
            height="25"
            width="auto"
            alt="Logo"
            css={{
              display: "flex",
              alignItems: "center",
            }}
          />
        : props.title
      }
    </Link>

    <Link to="/" css={{
      position: "relative",
      marginLeft: "1.6rem",
      paddingLeft: "1.6rem",
      ":before": {
        content: " ",
        position: "absolute",
        top: -3.5,
        left: 1,
        display: "block",
        width: 1,
        height: 23,
        background: "#d3e4ee",
        transform: "rotate(25deg)",
      },
    }}>
      Docs
    </Link>
  </div>
);


// Header

export default (props) => (
  <StaticQuery
    query={graphql`
      query HeaderLogoQuery {
        contentYaml {
          title
          logo
        }
      }  
    `}
    render={ data => (
      <header css={{
        display: "block",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        marginBottom: "4rem",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 0 3px rgba(0,0,0,.03),0 3px 46px rgba(0,0,0,.07)",
        zIndex: 500,
        opacity: .95,
      }}>
        <div css={{
          display: "flex",
          maxWidth: "128rem",
          margin: "0 auto",
          padding: ".8rem 4rem",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "noWrap",
          flex: "1 1 auto",
        }}>
          <HeaderLogo title={ data.contentYaml.title } logo={ data.contentYaml.logo } />
        </div>
      </header>
    )}
  />
);
