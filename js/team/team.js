class Team {
    constructor(title, name,email, id) {
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
        return 'member'
    }
}

module.exports = Team;