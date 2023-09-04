const https = require('https');
const fs = require('fs');
const path = require('path');

const repoOwner = 'Mahdi-Hazrati';
const branchName = "master"
const repoName = 'react-gh-pages-workflows';
const filePath = '.github/workflows/react-gh-pages-workflows.yml';
const githubURL = "raw.githubusercontent.com"


const folderPath = '.github/workflows';
const workflowsName = "react-gh-pages-workflows"

const yamlPath = path.join(folderPath, `${workflowsName}.yml`);

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m', 
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

const options = {
  hostname: githubURL,
  port: 443,
  path: `/${repoOwner}/${repoName}/${branchName}/${filePath}`,
  method: 'GET',
};

https.get(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Create the folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    fs.writeFile(yamlPath, data, (err) => {
      if (err) throw err;
      console.log(`${colors.green}Everything went well.${colors.reset}`);
      console.log(`${colors.green} ${repoName} successfully inital!.${colors.reset}`);
    });
  });
}).on('error', (err) => {
  console.log(`${colors.red}Error! Something went wrong.${colors.reset}`);
  console.error('Error retrieving file from GitHub:', err.message);

});