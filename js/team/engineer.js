const Team = require("./team");

class Engineer extends Team {
    constructor(title, name,email, id, github) {
        super(title, name, id, email)
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getMember(){
        return 'engineer'
    }
}

module.exports = Engineer
