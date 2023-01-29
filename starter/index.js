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
        name:'contents',
        message:'Enter table of contents?'
    },
    {
        type:'input',
        name:'install',
        message:'Enter the command to install dependencies',
        default: 'npm i',
    },
    {
        type:'input',
        name:'usage',
        message:'Enter the usage of the Repo?'
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
