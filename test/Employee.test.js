const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it(`should return an object containing a "name", "id", and "email" property when called with the "new" keyword`, () => {
    const obj = new Employee();
    expect("name" in obj).toEqual(true);
    expect("id" in obj).toEqual(true);
    expect("email" in obj).toEqual(true);
  });
  it(`should set "name", "id", and "email" when created`, () => {
    const name = "John";
    const id = 1234;
    const email = "test@example.com";
    const obj = new Employee(name, id, email);
    expect(obj.name).toEqual(name);
    expect(obj.id).toEqual(id);
    expect(obj.email).toEqual(email);
  });
});

describe("Employee method", () => {
  it(`user input name should retrieved through getName()`, () => {
    const testName = `John`;
    const obj = new Employee(testName);
    expect(obj.getName()).toEqual(testName);
  });
  it(`user input id should retrieved through getId()`, () => {
    const testId = 1234;
    const obj = new Employee(`John`, testId);
    expect(obj.getId()).toEqual(testId);
  });
  it(`user input Email should retrieved through getEmail()`, () => {
    const testEmail = "test@example.com";
    const obj = new Employee(`John`, 1234, testEmail);
    expect(obj.getEmail()).toEqual(testEmail);
  });
  it(`user selected role should retrieved through getRole()`, () => {
    const testRule = "Employee";
    const obj = new Employee(`John`, 1234, `test@example.com`, testRule);
    expect(obj.getRole()).toEqual(testRule);
  });
});
