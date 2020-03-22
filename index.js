const inquirer = require("inquirer");
const api = require("./utils/api");

const questions =[
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
    }

];

function init(){
    inquirer.prompt(questions)
        .then(function(data){
            var info = api.getUser(data)
        })
}

init();




