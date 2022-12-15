const Intern = require("../lib/Intern");

describe("Intern class", () => {
  it(`should return an object containing a "name", "id", "email" and "school" property when called with the "new" keyword`, () => {
    const obj = new Intern();
    expect("name" in obj).toEqual(true);
    expect("id" in obj).toEqual(true);
    expect("email" in obj).toEqual(true);
    expect("school" in obj).toEqual(true);
  });
  it(`should create a school in the Intern object`, () => {
    const testSchool = "University of Toronto";
    const obj = new Intern(`John`, 1234, `test@example.com`, testSchool);
    expect(obj.school).toEqual(testSchool);
  });
});

describe("Intern method", () => {
  it(`getRole() method should return Intern`, () => {
    const obj = new Intern(`John`, 1234, `test@example.com`, `test`);
    expect(obj.getRule()).toEqual(`Intern`);
  });
  it(`getGitHub() method should return School username`, () => {
    const testSchool = `University of Toronto`;
    const obj = new Intern(`John`, 1234, `test@example.com`, testSchool);
    expect(obj.getSchool()).toEqual(testSchool);
  });
});
