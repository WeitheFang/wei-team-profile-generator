const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it(`should return an object containing a "name", "id", "email", and "gitHub" property when called with the "new" keyword`, () => {
    const obj = new Engineer();
    expect("name" in obj).toEqual(true);
    expect("id" in obj).toEqual(true);
    expect("email" in obj).toEqual(true);
    expect("gitHub" in obj).toEqual(true);
  });
  it(`should create a github username in the engineer object`, () => {
    const gitHub = "test";
    const obj = new Engineer(`John`, 1234, `test@example.com`, gitHub);
    expect(obj.gitHub).toEqual(gitHub);
  });
});

describe("Engineer method", () => {
  it(`getRole() method should return engineer`, () => {
    const obj = new Engineer(`John`, 1234, `test@example.com`, `test`);
    expect(obj.getRule()).toEqual(`Engineer`);
  });
  it(`getGitHub() method should return github username`, () => {
    const testGitHub = `test`;
    const obj = new Engineer(`John`, 1234, `test@example.com`, testGitHub);
    expect(obj.getGitHub()).toEqual(testGitHub);
  });
});
