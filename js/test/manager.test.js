const Manager = require ('../team/manager')

describe ('Manager', () => {
    it ('should take in employee and github username and return', () =>{
        const manager = new Manager('engineer', 'Tim', 3, 'tim@member.com', 3)
        expect(manager.title).toEqual('engineer')
        expect(manager.name).toEqual('Tim')
        expect(manager.id).toEqual(3)
        expect(manager.email).toEqual('tim@member.com')
        expect(manager.office).toEqual('3')
    })
})