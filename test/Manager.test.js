const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it(`should return an object containing a "name", "id","officeNumber", and "email" property when called with the "new" keyword`, () => {
    const obj = new Manager();
    expect("name" in obj).toEqual(true);
    expect("id" in obj).toEqual(true);
    expect("email" in obj).toEqual(true);
    expect("officeNumber" in obj).toEqual(true);
  });
  it(`should create a office number in the Manager object`, () => {
    const officeNumber = 5487;
    const obj = new Manager(`John`, 1234, `test@example.com`, officeNumber);
    expect(obj.officeNumber).toEqual(officeNumber);
  });
});

describe("Manager method", () => {
  it(`getRole() method should return Manager`, () => {
    const obj = new Manager(`John`, 1234, `test@example.com`, 5487);
    expect(obj.getRule()).toEqual(`Manager`);
  });
  it(`getGitHub() method should return School username`, () => {
    const officeNumber = 5487;
    const obj = new Manager(`John`, 1234, `test@example.com`, officeNumber);
    expect(obj.getOfficeNumber()).toEqual(officeNumber);
  });
});
