const Team = require("./team");

class Manager extends Team {
    constructor(id, office) {
        this.id = id;
        this.office = office;
    }
}
