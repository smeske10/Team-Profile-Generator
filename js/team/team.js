class Team {
    constructor(title, name, id, email) {
                this.members = []
                this.title = title,
                this.name = name,
                this.id = id,
                this.email = email
    }
    getName(){
        return this.name
    }
    getID(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getMember(){
        return 'Member'
    }
}

module.exports = Team;