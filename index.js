//importing classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//npm packages
const inquirer = require("inquirer");
const fs = require("fs");

//Create an array for the team members
const teamMembers = [];

//function for adding team members
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the team member's role?",
        choices: ["Engineer", "Intern", "No more team members! Build my team!"],
      },
    ])
    .then(function (data) {
      if (data.role === "Engineer") {
        addEngineer();
      } else if (data.role === "Intern") {
        addIntern();
      } else {
        buildTeam();
      }
    });
}

//function for adding manager
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then(function (data) {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamMembers.push(manager);
      addTeamMember();
    });
}

//function for adding engineer
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then(function (data) {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.gitHub
      );
      teamMembers.push(engineer);
      addTeamMember();
    });
}

//function for adding intern
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is the intern's school?",
      },
    ])
    .then(function (data) {
      const intern = new Intern(data.name, data.id, data.email, data.gitHub);
      teamMembers.push(intern);
      addTeamMember();
    });
}

//function for building the team
function buildTeam() {
  fs.writeFileSync();
}

//function for initializing the app
function init() {
  addManager();
}

init();
