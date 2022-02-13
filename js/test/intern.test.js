const Intern = require ('../team/intern')

describe ('Intern', () => {
    it ('should take in employee and github username and return', () =>{
        const intern = new Intern('engineer', 'Tim', 3, 'tim@member.com', 'Penn')
        expect(intern.title).toEqual('engineer')
        expect(intern.name).toEqual('Tim')
        expect(intern.id).toEqual(3)
        expect(intern.email).toEqual('tim@member.com')
        expect(intern.school).toEqual('Penn')
    })
})