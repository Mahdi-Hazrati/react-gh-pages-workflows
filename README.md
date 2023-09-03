# React gh-pages workflows v2.0 - [stable] 🚀
This is a GitHub Action workflow that builds and deploys your React application to GitHub Pages. This action automates the process of building and deploying your React app, making it easier for you to focus on developing your application rather than worrying about deployment.

Usage
To use this workflow in your project:

1. Add a .github/workflows directory to the root of your project.
2. Create a new file in this directory named react-workflow.yml.
3. Copy and paste the following code into react-workflow.yml:

```YAML
name: React Workflow v1.0 - [Beta]

on:
  push:
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      # Checkout the code from the repo
      - name: Checkout Code
        uses: actions/checkout@v2
        
      # Install Node.js (required for building the React app)
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18.x'
          
      # Install dependencies and build the React app
      - name: Install React App Dependencies
        run: |
          npm install
      - name: Build React App
        run: |
          npm run build --if-present
          
      # Configure git user
      - name: Configure Git User 🤖
        env:
        # Your Name For Commit
          GIT_USERNAME: USERNAME
        # Your Email For Commit
          GIT_USEREMAIL: EMAIL
        run: |
          git config --local user.name "${GIT_USERNAME}"
          git config --local user.email "${GIT_USEREMAIL}"
      
      # Copy the built files to the gh-pages branch
      - name: Copy Built Files to gh-pages Branch 📁
        run: |
          mkdir -p .deploy
          mv build/* .deploy/
          git checkout -b gh-pages || git branch gh-pages
          rsync -av .deploy/ .
          
      # Commit the changes to the gh-pages branch
      - name: Commit Changes to gh-pages Branch 📝
        run: |
          git pull --rebase origin gh-pages
          git add .
          git commit -m "Build and deploy React app to gh-pages 🚀"
          git push --set-upstream origin gh-pages
```

4. Replace `USERNAME` and `EMAIL` with your own GitHub username and email, respectively.
5. Change Workflow permissions to `Read repository contents and packages permissions` at `https://github.com/your-username/your-react-repo/settings/actions`
6. Make a New branch called `gh-pages` in your repository in github
5. Commit and push your changes to the master branch.
6. That's it! Your React app will now be built and deployed to GitHub Pages every time you push to the master branch.

# How It Works
This workflow consists of five steps:

1. **Checkout Code** : Checks out the repository code so that it can be used in subsequent steps.
2. **Setup Node.js** : Installs and sets up Node.js version 18.x.
3. **Install dependencies and Build React App** : Installs the project's dependencies using npm install, and builds the React app using npm run build.
4. C**onfigure Git User** : Configures Git with your username and email so that the workflow can commit changes to the gh-pages branch.
5. **Copy Built Files to gh-pages Branch and Commit Changes to gh-pages Branch** : Copies the built files to the gh-pages branch and commits the changes, which triggers GitHub Pages to rebuild and deploy your React app.


# Why Use This Workflow?
This workflow automates the process of building and deploying your React application to GitHub Pages, saving you time and effort that can instead be spent on developing your application. Additionally, GitHub Pages is a free and easy way to host your web application online, making it accessible to anyone with an internet connection.

# Conclusion
React Workflow v1.0 - [Beta] is a simple and effective way to automate the process of building and deploying your React app to GitHub Pages. By using this workflow, you can save time and effort while ensuring that your app is always up-to-date and available for others to use. If you have any questions or feedback, feel free to reach out to the author, Mahdi Hazrati.
