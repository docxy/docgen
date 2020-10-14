<div align="center">
    <img src="https://github.com/docxy.png" alt="Awesome logo, ain't it?" height="200" />
    <h1>Docxy</h1>
    <p>Docxy is a React based open-source documentation site generator. Build beautiful, blazing fast documentation sites for your projects with just markdown.</p>
</div>

## Prerequisites
*   [Git]
*   [Node.js], preferrably the LTS version

## Get started
1.  Install the [Docxy CLI]
1.  Create your [Docxy] project:
    ```bash
    docxy create my-awesome-docs
    ```
1.  Initialize [Docxy] in the project directory:
    ```bash
    cd my-awesome-docs
    docxy init
    ```
1.  Add markdown pages in the `contents` directory which will serve as your
    documentation pages. You'll find two example pages already in there.
1.  Edit the `config.yaml` file in the `contents` directory which contains
    configurations for the site. Edit those as per your need.
1.  Anything you put in the `static` directory will be directly
    available in the root of your website. It is the right place to put your
    `favicon.ico` or `CNAME` file.
1.  You can start a hot-reloading development server while working on your site
    using the following command:
    ```bash
    docxy serve
    ```
1.  Build the documentation when you're ready for deployment using the following
    command:
    ```bash
    docxy build
    ```
    This will build an optimized static site inside the `build` directory from your markdown pages ready for deployment to production.

    You can deploy it anywhere you want - [GitHub Pages](https://pages.github.com),
    [GitLab Pages](https://gitlab.com/pages), [DigitalOcean](https://m.do.co/c/0ee6cb9c7ee0),
    AWS, GCP, Azure, Heroku, or your own server!


[Node.js]: https://nodejs.org/
[Git]: https://git-scm.com
[Docxy]: https://github.com/docxy/docgen
[Docxy CLI]: https://github.com/docxy/docxy
