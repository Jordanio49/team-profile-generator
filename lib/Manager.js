// importing the Employee constructor data to be used in engineer constructor
const Employee = require('./Employee');

// creating Manager class and making it a child of Employee with extends
class Manager extends Employee {
    constructor(name, id, email, office) {
        // calling the data from the employee class constructor
        super (name, id, email);

        this.office = office;
    }

    // function to get office number
    getOffice() {
        return this.office;
    }

    // function to override basic employee role
    getRole() {
        return 'Manager'
    }
};

//exporting
module.exports = Manager;