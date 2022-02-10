const Team = require("./team");

class Manager extends Team {
    constructor(office) {
        this.office = office;
    }
}

module.exports = Manager;
