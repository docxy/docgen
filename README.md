<div align="center">
  <h1>AwesomeDocs</h1>
  <p>An awesome documentation site generator made with Gatsby! So, inherently, it's blazing fast!</p>
</div>

> This documentation is pretty much a work in progress now.
> I'll try to make time and improve it in the coming days.

## Prerequisites
* The latest LTS version of [Node.js]
* [Yarn] package manager for Node.js
* [Git]

## Get started
1.  Download the [AwesomeDocs Starter]
2.  The files in the `data` directory contains configurations for the site.
    Edit those as per your need.
3.  Add markdown pages in the `content` directory which will serve as your
    documentation pages. You'll find two example pages already in there.
4.  **Build the documentation**  
    If you're on Linux/macOS, run this in the terminal:
    ```bash
    ./scripts/awesome.sh build
    ```
    And if you're on Windows, run this in the command prompt:
    ```ps
    powershell ./scripts/awesome.ps1 build
    ```
5.  **Check if the site looks fine**  
    If you're on Linux/macOS, run this in the terminal:
    ```bash
    ./scripts/awesome.sh serve
    ```
    And if you're on Windows, run this in the command prompt:
    ```ps
    powershell ./scripts/awesome.ps1 serve
    ```
5.  **Deploy the site to GitHub Pages**  
    If you're on Linux/macOS, run this in the terminal:
    ```bash
    ./scripts/awesome.sh deploy
    ```
    And if you're on Windows, run this in the command prompt:
    ```ps
    powershell ./scripts/awesome.ps1 deploy
    ```

[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.com/
[Git]: https://git-scm.com
[AwesomeDocs]: https://github.com/AwesomeDocs/AwesomeDocs
[AwesomeDocs Starter]: https://github.com/AwesomeDocs/awesomedocs-starter
