// linking the file that will generate the html
const generateHTML = require('./src/generatehtml');

// linking node modules
const fs = require('fs');
const inquirer = require('inquirer');

// linking the team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// creating an array to which the team will be pushed
const teamArray = [];

// running through manager prompts first because they will be the team leader and thus should be included as the first team member
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id?',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('Please enter valid id number.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            // important note to self!
            // how do you validate emails to make sure its an actually valid address instead of any old string?
            // important note to self!
            type: 'input',
            name: 'email',
            message: 'What is your preferred email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log('Please enter your office number.');
                    return false;
                }
            }
        }
    ])
    // compiling prompt answers into an object and pushing them to the teamArray
    .then(managerInput => {
        const { name, id, email, office } = managerInput;
        const manager = new Manager (name, id, email, office);

        teamArray.push(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What role will this employee play?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employees's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id for this employee?',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('Please enter valid id number.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            // important note to self!
            // how do you validate emails to make sure its an actually valid address instead of any old string?
            // important note to self!
            type: 'input',
            name: 'email',
            message: 'What is the preferred email for this employee?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address.');
                    return false;
                }
            }
        },
        {
            // using when to only make this prompt appear if the user selected the 'Engineer' role
            type: 'input',
            name: 'github',
            message: "What is this employee's github username?",
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a github username.');
                    return false;
                }
            }
        },
        {
            // using when to only make this prompt appear if the user selected 'Intern' role
            type: 'input',
            name: 'school',
            message: 'What school is this employee affiliated with?',
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school name');
                    return false;
                }
            }
        }
    ])
}
addManager();
// addEmployee();