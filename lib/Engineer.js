// importing the Employee constructor data to be used in engineer constructor
const Employee = require('./Employee');

// creating Engineer class and making it a child of Employee with extends
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calling the data from the employee class constructor
        super (name, id, email);

        this.github = github;
    }

    // function to get github username
    getGitHub() {
        return this.github
    }

    // function to override basic employee role
    getRole() {
        return 'Engineer'
    }
};

// exporting
module.exports = Engineer;