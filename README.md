# Basic-TypeScript

npm init -y:

This command is used to initialize a new Node.js project and create a package.json file.
-y or --yes is an option that allows you to confirm all the questions typically asked during the initialization process.

npm install typescript --save-dev:

This command is used to install TypeScript as a development dependency (devDependency) in your project.
--save-dev instructs npm to save TypeScript as a devDependency in the package.json file.

npm install lite-server:

This command is used to install the lite-server package as a dependency in your project.

Add this script in .json file:

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },

run with 'npm start'
