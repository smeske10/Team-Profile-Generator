const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML/generatehtml.js');
const Manager = require("./team/manager");
const Intern = require("./team/intern");
const Engineer = require("./team/engineer");
const Team = require('./team/team.js');

const team = []

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
            // fs.writeFile(`index.html`, generateHTML(),
            //     error => {
            //         if (error) {
            //             console.log('Please input all the data')
            //         }
            //         console.log('Your Team Profile has been published')
            //     }
            // );
            if (data.another === 'yes') {
                if (data.title === 'manager'){
                    let manager = new Manager();
                    team.push(manager)
                    console.log(manager);
                }
                if (data.title === 'engineer'){
                    let engineer = new Engineer();
                    team.push(engineer)
                    console.log(engineer);
                }
                if (data.title === 'intern'){
                    let intern = new Intern();
                    team.push(intern)
                    console.log(intern);
                }
                
                inquire();
            }
            else if (data.another === 'no') {
                if (data.title === 'manager'){
                    let manager = new Manager();
                    console.log(manager);
                }
                if (data.title === 'engineer'){
                    let engineer = new Engineer();
                    console.log(engineer);
                }
                if (data.title === 'intern'){
                    let intern = new Intern();
                    console.log(intern);
                }
                fs.createWriteStream(
                    `</div>
                </body>
                
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                    crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
                    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                    crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossorigin="anonymous"></script>
                <script src="./index.js"></script>
                
                </html>`)
            }
        })
    }

inquire();
