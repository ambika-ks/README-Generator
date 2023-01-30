const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type:'input',
        name:'name',
        message:'Enter Project Name?',
    },
    {
        type:'input',
        name:'description',
        message:'Enter Project Description?',
    },
    {
        type:'input',
        name:'install',
        message:'Enter the command to install dependencies',
        default: 'npm i',
    },
    {
        type:'input',
        name:'tests',
        message:'Enter the command to run tests?',
        default: 'npm test',
    },
    {
        type:'input',
        name:'usage',
        message:'Enter the usage of the Repo : Run command ?',
        default: 'node index.js'
    },
    {
        type:'list',
        name:'license',
        message:'Enter your Project Licence?',
        choices :['MIT','Boost','Apache','Mozilla','None'],
    },
    {
        type:'input',
        name:'contribute',
        message:'Enter the Contributers of the project ',
    },
    {
        type:'input',
        name:'github',
        message:'Enter GitHub Username?'
    },
    {
        type:'input',
        name:'email',
        message:'Enter email address?'
    },

];

// function to write README file
// function writeToFile(fileName, data) {
// }



// function to initialize and also to write to MYREADME file
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
     const mark=generateMarkdown(answers)
     fs.writeFile('MYREADME.md',mark,function(err){
         if (err){
             console.log('Could not save File')
         } 
         else{
            console.log(`SUCCESS !! New readme file MYREADME.md generated inside the current folder`)
         }
         })
    })


    .catch((error)=>{
        console.log(error)
    })
}

// function call to initialize program
init();
