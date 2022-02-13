const Team = require("./team");

class Manager extends Team {
    constructor(title, name, id, email, office) {
        super(title, name, id, email)
        this.office = office;
    }
    getOffice(){
        return this.office
    }
    getMember(){
        return 'Manager'
    }
}

module.exports = Manager
