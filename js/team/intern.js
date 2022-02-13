const Team = require("./team");

class Intern extends Team {
    constructor(title, name, id, email, school) {
        super(title, name, id, email)
        this.school = school;
    }
    getSchool() {
        return school
    }
    getMember(){
        return 'Intern'
    }
}

module.exports = Intern

