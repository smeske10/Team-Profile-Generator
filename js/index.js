// const Members = require('./members');
// const Team = require("./team");
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the managers name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the managers id?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the managers email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the managers office number?',
            name: 'office',
        },
        {
            type: 'list',
            message: 'Which team member would you like to add?',
            name: 'member',
            choices: ['engineer', 'intern'],
            default: 'engineer'
        },
        {
            type: 'input',
            message: 'What is the engineers name?',
            name: 'name',
            when: (data) => data.member === 'engineer'
        },
        {
            type: 'input',
            message: 'What is the engineers ID?',
            name: 'id',
            when: (data) => data.member === 'engineer'
        },
        {
            type: 'input',
            message: 'What is the engineers email?',
            name: 'email',
            when: (data) => data.member === 'engineer'
        },
        {
            type: 'input',
            message: 'What is the engineers Github Username?',
            name: 'github',
            when: (data) => data.member === 'engineer'
        },
        {
            type: 'input',
            message: 'What is the interns name?',
            name: 'name',
            when: (data) => data.member === 'intern'
        },
        {
            type: 'input',
            message: 'What is the interns ID?',
            name: 'id',
            when: (data) => data.member === 'intern'
        },
        {
            type: 'input',
            message: 'What is the interns email?',
            name: 'email',
            when: (data) => data.member === 'intern'
        },
        {
            type: 'input',
            message: 'What is the interns school?',
            name: 'school',
            when: (data) => data.member === 'intern'
        },
    ]).then((data) => {
        console.log(data);
        fs.writeFile(`team.html`, generateHTML(data),
        error =>{
            if (error) {
                console.log('Please input all the data')
            }
            console.log('Your Team Profile has been published')
        }
    )})

var modal = document.getElementById('modal')
var input = document.getElementById('input')

modal.addEventListener('shown.bs.modal', function () {
  input.focus()
})