const Team = require("../team/team")

describe("Team", () => {
    //Test for all use cases when initializing a new Team object 
    describe("Initialization", () => {
      it("should create an object with a title, name, id, email if provided valid arguments", () => {
        const member = new Team("manager", "Tim", 3, "tim@member.com");
  
        expect(member.title).toEqual("manager");
        expect(member.name).toEqual("Tim");
        expect(member.id).toEqual(3);
        expect(member.email).toEqual("tim@member.com");
      });
    });

    it("should throw an error if provided no arguments", () => {
        const mem = () => new Team();

        expect(mem).toThrow();
    });

    it("should throw an error if not provided an title", () => {
        const mem = () => new Team("Tim", 3, "tim@member.com");
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'title' to be selected");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(mem).toThrowError(err);
    });

    it("should throw an error if not provided an name", () => {
        const mem = () => new Team("manager", 3, "tim@member.com");
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'name' to be entered");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(mem).toThrowError(err);
    });

    it("should throw an error if not provided an id", () => {
        const mem = () => new Team("manager", "Tim", "tim@member.com");
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'id' to be entered");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(mem).toThrowError(err);
    });

    it("should throw an error if not provided an email", () => {
        const mem = () => new Team("manager", "Tim", 3);
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'email' to be entered");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(mem).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
        const mem = () => new Team("manager", 2, 3, "tim@member.com");
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'name' to be a string");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(mem).toThrowError(err);
    });

    it("should throw an error if 'email' is not a string", () => {
        const mem = () => new Team("manager", "Tim", 3, 4);
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'email' to be a string");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(mem).toThrowError(err);
    });
})