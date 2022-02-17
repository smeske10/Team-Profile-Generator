const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./js/generateHTML/generatehtml');
const Manager = require("./js/team/manager");
const Intern = require("./js/team/intern");
const Engineer = require("./js/team/engineer");

const team = []

const inquire = () => {
    return inquirer
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
                when: (data) => data.title === 'engineer'
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
                name: 'another',
                choices: ['yes', 'no'],
            },
        ]).then((data) => {
            if (data.title === 'manager'){
                const manager = new Manager(data.title, data.name, data.id, data.email, data.office);
                team.push(manager)
            }
            if (data.title === 'engineer'){
                const engineer = new Engineer(data.title, data.name, data.id, data.email, data.github);
                team.push(engineer)
            }
            if (data.title === 'intern'){
                const intern = new Intern(data.title, data.name, data.id, data.email, data.school);
                team.push(intern)
            }
            if (data.another === 'yes') {
                return inquire();
            } else {
                return team
            }
        })
    }

const writeFile = (data) => {
    fs.writeFile('./index.html', data, err => {
        if (err) {
            console.log(err);
            return
        } else {
            console.log("Your team's profile has been successfully created!")
        }
    })
}

inquire()
    .then(team => {
        return generateHTML(team);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err);
    });
