const Team = require("./team");

class Engineer extends Team {
    constructor(title, name, id, email, github) {
        super(title, name, id, email)
        this.github = github;
    }
    getGithub() {
        return this.github
    }
}

module.exports = Engineer
