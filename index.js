const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios")
const writeFileAsync = util.promisify(fs.writeFile);
function promptUser() {
    return inquirer.prompt([
        {
            type:"input",
            name: "username",
            message: "Enter your Github username"
        },
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
            name:"table",
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

function generateReadMe(data){
    return `
        # ${data.title}

        ## Description 
        ${data.description}

        ## Table of Contents
        ${data.table}

        ## Installation
        ${data.installation}

        ## Usage
        ${data.usage}

        ## Credits
        ${data.contribution}

        ## License
        ${data.license}

        ## Tests
        ${data.test}

        ## Questions
        ${data.questions}
`}

promptUser()
    .then(function(data){
        const md = generateReadMe(data);
        axios.get(`https://api.github.com/users/${data.username}`, {headers: { Authorization: 'token de9d4a2f02d9a80753add2d369b69a1fe69aebca', }})
            .then(function(response){
                console.log(response);
            })
            .catch(function(err){
                console.log(err)
            })
        return writeFileAsync("ReadMe.md", md);
    })
    .then(function(){
        console.log("Sucessfully created ReadME file.");
    })
    .catch(function(err){
        console.log(err);
    })


