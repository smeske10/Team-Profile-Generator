const Team = require("./team");

class Engineer extends Team {
    constructor(github) {
        this.github = github;
    }
}

module.exports = Engineer;
