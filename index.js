#!/usr/bin/env node

// Import required modules
const https = require("https");
const fs = require("fs");
const path = require("path");

// https://github.com/Mahdi-Hazrati/react-gh-pages-workflows/tree/master

// Constants
const repoOwner = "Mahdi-Hazrati";
const branchName = "master";
const repoName = "react-gh-pages-workflows";
const filePath = ".github/workflows/react-gh-pages-workflows.yml";
const githubURL = "raw.githubusercontent.com";
const workflowsName = "react-gh-pages-workflows";

// Path
const folderPath = ".github/workflows";
const yamlPath = path.join(folderPath, `${workflowsName}.yml`);

// Colors Object
const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
};

// HTTP request options
const options = {
    hostname: githubURL,
    port: 443,
    path: `/${repoOwner}/${repoName}/${branchName}/${filePath}`,
    method: "GET",
};

// Send HTTP GET request to retrieve the file from GitHub
https
    .get(options, (res) => {
        let data = "";
        res.on("data", (chunk) => {
            data += chunk;
        });
        res.on("end", () => {
            // Create the folder if it doesn't exist
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath, { recursive: true });
            }
            // Write the retrieved file data to the specified YAML path
            fs.writeFile(yamlPath, data, (err) => {
                if (err) throw err;
                console.log(
                    `${colors.green} ${repoName} successfully initialized! ${colors.reset}`
                );
            });
        });
    })
    .on("error", (err) => {
        console.error("Error retrieving file from GitHub:", err.message);
    });
