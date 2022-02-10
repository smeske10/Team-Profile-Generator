const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML/generatehtml');
const Team = require("./team/team");

const inquire = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which team member would you like to add?',
                name: 'title',
                choices: ['manager', 'engineer', 'intern'],
                default: 'engineer',
            },
            {
                type: 'input',
                message: 'What is the managers name?',
                name: 'name',
                when: (data) => data.title === 'manager'
            },
            {
                type: 'input',
                message: 'What is the managers id?',
                name: 'id',
                when: (data) => data.title === 'manager'
            },
            {
                type: 'input',
                message: 'What is the managers email?',
                name: 'email',
                when: (data) => data.title === 'manager'
            },
            {
                type: 'input',
                message: 'What is the managers office number?',
                name: 'office',
                when: (data) => data.title === 'manager'
            },
            {
                type: 'input',
                message: 'What is the engineers name?',
                name: 'name',
                when: (data) => data.title === 'engineer'
            },
            {
                type: 'input',
                message: 'What is the engineers ID?',
                name: 'id',
                when: (data) => data.title === 'engineer'
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
                when: (data) => data.title === 'engineer'
            },
            {
                type: 'input',
                message: 'What is the interns name?',
                name: 'name',
                when: (data) => data.title === 'intern'
            },
            {
                type: 'input',
                message: 'What is the interns ID?',
                name: 'id',
                when: (data) => data.title === 'intern'
            },
            {
                type: 'input',
                message: 'What is the interns email?',
                name: 'email',
                when: (data) => data.title === 'intern'
            },
            {
                type: 'input',
                message: 'What is the interns school?',
                name: 'school',
                when: (data) => data.title === 'intern'
            },
            {
                type: 'list',
                message: 'Would you like to add another team member?',
                name: 'members',
                choices: ['yes', 'no'],
            },
        ]).then((data) => {
            if (data.members === 'yes') {
                console.log(data);
                new Team;
                inquire()
            }
            else if (data.members === 'no') {
                fs.writeFile(`index.html`, generateHTML(data),
                    error => {
                        if (error) {
                            console.log('Please input all the data')
                        }
                        console.log('Your Team Profile has been published')
                    }
                )
            }
        })
}

inquire();