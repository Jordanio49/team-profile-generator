// importing the employee constructor data to be used in intern constructor
const Employee = require('./Employee');

// creating Intern class and making it a child of Employee with extends
class Intern extends Employee {
    constructor(name, id, email, school) {
        // calling data from Employee class constructor
        super (name, id, email);

        this.school = school
    }

    // function to get school name
    getSchool() {
        return this.school
    }

    // function to override basic employee role
    getRole() {
        return 'Intern'
    }
};

// exporting
module.exports = Intern;