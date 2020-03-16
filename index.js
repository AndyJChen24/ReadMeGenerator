const inquirer = require("inquirer");
const fs = require("fs");



const questions = ["What is your name?", "Where are you from?"

];

function writeToFile(fileName, data) {
}

function init() {

}

init();

function promptUser() {
    return inquirer.prompt([
        {
            type:"input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type:"input",
            name:"description",
            message:"Please enter the project description."
        },
        {
            type:"input",
            name:"Table of Contents",
            message:"Please enter the table of contents."
        },
        {
            type:"input",
            name:"installation",
            message:"Please enter the installation process."
        },
        {
            type:"input",
            name:"usage",
            message:"What is it's usage?"
        },
        {
            type:"input",
            name:"license",
            message:"Please enter license if there are any."
        },
        {
            type:"input",
            name:"contribution",
            message:"Who contribute to this project?"
        },
        {
            type:"input",
            name:"test",
            message:"What kind of testing did this go through?"
        },
        {
            type:"input",
            name:"questions",
            message:"Questions that might come up?"
        },

    ])
}