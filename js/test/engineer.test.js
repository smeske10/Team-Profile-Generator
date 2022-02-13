const Engineer = require ('../team/Engineer')

describe ('Engineer', () => {
    it ('should take in employee and github username and return', () =>{
        const engineer = new Engineer('engineer', 'Tim', 3, 'tim@member.com', 'tim10')
        expect(engineer.title).toEqual('engineer')
        expect(engineer.name).toEqual('Tim')
        expect(engineer.id).toEqual(3)
        expect(engineer.email).toEqual('tim@member.com')
        expect(engineer.github).toEqual('tim10')
    })
})