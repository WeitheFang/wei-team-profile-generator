class Employee {
  constructor(name, id, email, rule) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.rule = rule;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.rule;
  }
}

module.exports = Employee;
