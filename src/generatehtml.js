
const generateMyTeamPortfolio = function (employeeInfo) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <div class="navbar navbar-light" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center text-warning" id="navbar-content">My Team</span>
        </div>
    </header>
    <main>
        <div class="container" id="card-container">
            <div class="row">
                <!--team cards will be placed here dynamically-->
                ${employeeInfo}
            </div>
        </div>
    </main>
</body>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
    crossorigin="anonymous"></script>

</html>
`;
}

const generateManager = function (manager) {
    return `
    <div class="col-4 mt-3">
        <div class="card">
            <div class="card-header">
                <h2 class="text-warning text-center">${manager.name}</h2>
                <h3 class="text-warning text-center"><img src="./images/mug.png" alt="coffee cup">Manager</h3>
            </div>
            <div class="card-body">
                <p class="employee-id text-center">Employee ID: ${manager.id}</p>
                <p class="email-address text-center">Email Address: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number text-center">Office Number: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;
}

const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-3">
        <div class="card">
            <div class="card-header" >
                <h2 class="text-warning text-center">${intern.name}</h2>
                <h3 class="text-warning text-center"><img src="./images/intern.png" alt="coffe cup">Intern</h3>
            </div>
            <div class="card-body">
                <p class="employee-id text-center">Employee ID: ${intern.id}</p>
                <p class="email-address text-center">Email Address: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school text-center">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-3">
        <div class="card">
            <div class="card-header" >
                <h2 class="text-warning text-center">${engineer.name}</h2>
                <h3 class="text-warning text-center"><img src="./images/coder.png" alt="coder">Engineer</h3>
            </div>
            <div class="card-body">
                <p class="employee-id text-center">Employee ID: ${engineer.id}</p>
                <p class="email-address text-center">Email Address: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github text-center">GitHub Username: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

generateHTML = (info) => {
    //creating an array for the cards
    cardArr = [];

    for (let i = 0; i < info.length; i++) {
        const employee = info[i];
        const role = employee.getRole();

        //checking for the role that's been assigned and calling the appropriate generate function
        if (role === 'Manager') {
            const mngrCard = generateManager(employee);
            cardArr.push(mngrCard);
        }

        if (role === 'Intern') {
            const intCard = generateIntern(employee);
            cardArr.push(intCard);
        }

        if (role === 'Engineer') {
            const engCard = generateEngineer(employee);
            cardArr.push(engCard);
        }
    }

    const employeeInfo = cardArr.join('')
    const generateMyTeam = generateMyTeamPortfolio(employeeInfo);
    return generateMyTeam;
}

//exporting to be used by my index.js
module.exports = generateHTML;