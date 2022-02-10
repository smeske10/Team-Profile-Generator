const Team = require("./team");

class Intern extends Team {
    constructor(school) {
        this.school = school;
    }
}

module.exports = Intern;
