const fs = require("fs");
const path = require("path");
const githubPages = require("gh-pages");
const YAML = require("yaml");

const deployConfigFile = fs.readFileSync(path.join(__dirname + "/../data/deploy.yaml"), "utf8");
const deployConfig = YAML.parse(deployConfigFile);

let { repo, branch, dest, message } = deployConfig;

if (!repo) {
  throw new Error("You need to set a repo URL in the deploy configuration.");
}

if (!branch) {
  branch = "gh-pages"
}
if (!dest) {
  dest = "."
}
if (!message) {
  message = "documentation update";
}

const options = {
  repo,
  branch,
  dest,
  message,
};

githubPages.publish("public", options, console.error);
