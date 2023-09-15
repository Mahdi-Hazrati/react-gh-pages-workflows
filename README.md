<h1 align="center" >✨ React GitHub Pages 🚀 Workflows ✨</h1>

https://github.com/Mahdi-Hazrati/react-gh-pages-workflows/assets/127740921/c9ca6a12-9736-44d1-840c-c0c354cc7c21

Hey there, welcome to the React Workflow repository! This GitHub Action workflow is designed to automate the process of building and deploying your React application to GitHub Pages, saving you valuable time and effort. By leveraging the power of GitHub Pages, you can host your web application online for free, making it easily accessible to anyone with an internet connection. Let's delve into the reasons why this workflow is the perfect choice for your React projects:

## Why you should use `React Github pages Workflows`?

☁  **Build Under Github Cloud Server** : If you deploy with this workflow, everything will be built on the GitHub server and saved multiple times.This means that you can leverage the power of GitHub's infrastructure to automate the building and deployment processes.

🔧 **Automated Deployment**: Say goodbye to manual handling of the build and deployment process! This workflow automates these steps, allowing you to focus your energy on developing your application rather than worrying about deployment hassles.

⚡️ **Time and Effort Saving**: Deploying a React application to GitHub Pages can be a time-consuming task. With this workflow, everything is streamlined, saving you precious time and effort that can be dedicated to enhancing your application.

🌐 **Accessible Web Hosting**: GitHub Pages provides a free and straightforward way to host your web application online. It offers a platform for showcasing your work to a global audience, without the need for complex setups or additional expenses.

## Use Case Scenario

👩‍💻 Let's dive into an example use case to demonstrate the benefits of this workflow:

Imagine you're working on a stunning React application and want to make it available to users worldwide. Instead of manually dealing with the build and deployment process, you can rely on this workflow. Simply push your changes to the master branch, and the workflow will automatically kick off. It will handle the build process, transforming your React app into a production-ready state. The resulting build files will be seamlessly deployed to the `gh-pages` branch, instantly making your application accessible to everyone with an internet connection.

## Easy Peasy Method (NPX) - Automatic

Open Terminal in your root of `react app` direcotry and enter this command:
```bash 
npx react-gh-pages-workflows
```
and this command create latest verstion of github workflow for your react app
then you should commit changes on push to github 
```bash
git add .
git commit -m "Add Mahdi-Hazrati/react-gh-pages-workflows to react app"
```
then push changes to github:

```bash
git push origin master
```

## Manual Config Workflows (Step-by-Step)

![workflows visualization](./assets/visualization.svg)

📝 Here's a step-by-step guide to help you quickly set up and utilize this workflow for your projects:

1. Go to the Actions tab in your GitHub repository.
2. Click on the "Set up a workflow yourself" button.
3. Copy the provided workflow code and paste it into the YAML file.

```yml
name: react gh-pages workflows ✨

on:
  push:
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Build for production
        run: npm run build

      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./build


# Latest Workflows > https://github.com/Mahdi-Hazrati/react-gh-pages-workflows

```

4. Customize the workflow as per your project requirements.
5. Save the file, and the workflow will be activated.
6. Ensure your React application resides in the master branch.
7. Commit and push your changes to trigger the workflow.
8. Sit back and relax while the workflow automates the build and deployment process for you.
9. Once the process is complete, visit your GitHub Pages URL to access your live React application.

## 💡 Want to Contribute?

We welcome contributions to enhance our project! If you're interested in getting involved, please take a moment to review our [Contribution Guidelines](./CONTRIBUTING.md). These guidelines provide detailed information on how you can contribute to our project, from reporting issues to submitting pull requests. We truly appreciate your support and look forward to collaborating with you! 🙌🌟

Feel free to customize and adapt the description according to your project's specific needs and style. Happy contributing! 😊🎉

## End Note

🎉 This React Workflow with GitHub Pages was developed by Mahdi Hazrati to simplify the deployment of React applications.
Enjoy the automated process, and make the most of GitHub Pages' accessible web hosting features. Show the world what you've built with React!

If you encounter any issues or have suggestions for improvements, please feel free to reach out.
Thank you for choosing this workflow, and happy coding! 🌟💻
