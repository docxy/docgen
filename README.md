<div align="center">
  <h1>AwesomeDocs</h1>
  <p>An awesome documentation site generator made with Gatsby! So, inherently, it's blazing fast!</p>
</div>

![Awesome Screenshot](https://user-images.githubusercontent.com/19631364/58768277-5c43cc80-85b6-11e9-86cf-da765a66a7bd.png)

## Prerequisites
* The latest LTS version of [Node.js]
* [Yarn] package manager for Node.js
* [Git]

## Get started
1.  Install the global [AwesomeDocs CLI Tool]
2.  Initialize [AwesomeDocs] in a directory.
    ```bash
    mkdir CoolDocs && cd CoolDocs
    awesomedocs init
    ```
3.  Add markdown pages in the `content` directory which will serve as your
    documentation pages. You'll find two example pages already in there.
4.  Edit the `config.yaml` file in the `content` directory which contains
    configurations for the site. Edit those as per your need.
5.  **(OPTIONAL)** Anything you put in the `static` directory will be directly
    available in the root of your website. It is the right place to put your
    `favicon.ico` or `CNAME` file.
6.  **Check if the site looks fine by starting a development server**  
    ```bash
    awesomedocs serve
    ```
7.  **Build the documentation when you're ready for deployment**  
    ```bash
    awesomedocs build
    ```
    This will build the documentation inside the `./.awesome/build` directory.

[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.com/
[Git]: https://git-scm.com
[AwesomeDocs]: https://github.com/AwesomeDocs/AwesomeDocs
[AwesomeDocs CLI Tool]: https://github.com/AwesomeDocs/CLI
