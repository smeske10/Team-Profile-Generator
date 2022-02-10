const Manager = require("./manager");
const Intern = require("./intern");
const Engineer = require("./engineer");

class Team {
    constructor(title, name, id, email) {
        this.title = title,
        this.name = name,
        this.id = id,
        this.email = email
    }
    newMember () {
        if (this.title === 'manager') {
            new Manager;
        }
        else if (this.title === 'engineer') {
            new Engineer;
        }
        else if (this.title === 'intern') {
            new Intern;
        }
    }
};

module.exports = Team;