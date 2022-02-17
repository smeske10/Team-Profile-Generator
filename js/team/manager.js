const Team = require("./team");

class Manager extends Team {
    constructor(title, name, email, id, office) {
        super(title, name, id, email)
        this.office = office;
    }
    getOffice(){
        return this.office
    }
    getMember(){
        return 'manager'
    }
}

module.exports = Manager
