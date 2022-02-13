const Team = require("./team");

class Engineer extends Team {
    constructor(title, name, id, email, github) {
        super(title, name, id, email)
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getMember(){
        return 'Engineer'
    }
}

module.exports = Engineer
