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
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your employee id.');
                    return false;
                }
            }
        },
        {
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

addManager();