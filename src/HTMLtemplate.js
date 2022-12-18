//create function to render the team
const renderTeam = (teamMembers) => {
  //create function to render the manager
  const renderManager = (manager) =>
    `
              <div class="card col-3 me-3 mb-5 manager-card">
            <div class="card-header manager-header">
              <h2 class="card-title">${manager.name}</h2>
              <h3 class="card-title">
                <i class="fa-solid fa-people-roof"></i> ${manager.rule}
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${manager.email}">${manager.email}</a>
                </li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
              </ul>
            </div>
          </div>
          `;

  //create function for render engineer
  const renderEngineer = (
    engineer
  ) => `<div class="card col-3 me-3 mb-5 employee-card">
            <div class="card-header employee-header">
              <h2 class="card-title">${engineer.name}</h2>
              <h3 class="card-title">
                <i class="fa-solid fa-toolbox"></i> ${engineer.rule}
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${engineer.email}">${engineer.email}</a>
                </li>
                <li class="list-group-item">
                  GitHub:
                  <a href="https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a>
                </li>
              </ul>
            </div>
          </div>`;

  //create function for render intern
  const renderIntern = (
    intern
  ) => `<div class="card col-3 me-3 mb-5 employee-card">
            <div class="card-header employee-header">
              <h2 class="card-title">${intern.name}</h2>
              <h3 class="card-title">
                <i class="fa-solid fa-user-graduate"></i> ${intern.rule}
              </h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${intern.email}"
                    >${intern.email}</a
                  >
                </li>
                <li class="list-group-item">School: ${intern.school}</li>
              </ul>
            </div>
          </div>`;

  //create an empty array to store the html
  const html = [];

  //filter out manager and push the manager to the html array
  html.push(
    teamMembers
      .filter((employee) => employee.getRule() === "Manager")
      .map((manager) => renderManager(manager))
  );

  //filter out engineer and push the engineer to the html array
  html.push(
    teamMembers
      .filter((employee) => employee.getRule() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );

  //filter out intern and push the intern to the html array
  html.push(
    teamMembers
      .filter((employee) => employee.getRule() === "Intern")
      .map((intern) => renderIntern(intern))
  );
  return html.join("");
};

//create function to generate the html
const generateHTML = (teamMembers) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>My Team Profile</title>
  </head>
  <body>
    <nav class="navbar bg-light">
      <div class="container-fluid d-flex flex-wrap justify-content-center">
        <a class="navbar-brand">
          <i class="fa-solid fa-microchip"></i>
          My Team Profile
        </a>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div
          class="team-mem-container col-12 d-flex flex-wrap justify-content-center m-5"
        >
            ${renderTeam(teamMembers)}
           </div>
      </div>
    </div>
    <script
      src="https://kit.fontawesome.com/2c5e96edbe.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html> 
    `;
};

module.exports = generateHTML;
