/*---------------------------------------                              Developer Notes:                              --------------------------------------

Possible future changes: In index.js, validate that input was given or confirm user wants to skip section. In generateMarkdown.js, if section is empty
skip it.

---------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Include packages needed for this application.
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// Create an array of questions for user input.
const questions = [
    // Request for project title.
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    // Request for project description.
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of what your project is, why you made it, and how it works.",
    },
    // Request for project installation instructions.
    {
        type: "input",
        name: "installation",
        message: "Provide step-by-step instructions to install your project.",
    },
    // Request for project usage information.
    {
        type: "input",
        name: "usage",
        message: "Provide a description of how to navigate and use your project.",
    },
    // Request for project contribution guidelines.
    {
        type: "input",
        name: "contribution",
        message: "Provide guidelines for how other developers can contribute to your project. You can write your own, or you can use the industry standard of The Contributor Covenant.",
    },
    // Request for project test instructions.
    {
        type: "input",
        name: "test",
        message: "Provide examples of how to run any tests you've written for your project.",
    },
    // Request for project license type.
    {
        type: "list",
        name: "license",
        message: "Provide the license under which your project is covered. For more information, see https://choosealicense.com/.",
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0', 'The Unlicense']
    },
    // Request for project author's Github username.
    {
        type: "input",
        name: "github",
        message: "Provide your GitHub username.",
    },
    // Request for project author's email address.
    {
        type: "input",
        name: "email",
        message: "Provide an email address.",
    },
    // Request for instructions on how to reach author with additional questions.
    {
        type: "input",
        name: "questions",
        message: "Provide instructions on how people can reach you with additional questions.",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function (data) {
        writeToFile("README.md", generateMarkdown(data))
    })
};

// Function call to initialize app
init();
