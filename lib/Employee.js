// creating class for Employee with a constructor that will be used across all employment roles
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // function to get name
    getName() {
        return this.name;
    }

    // function to get id
    getId() {
        return this.id;
    }

    // function to get email
    getEmail() {
        return this.email
    }

    // function to get employee's role
    getRole() {
        return 'Employee';
    }
};

// exporting 
module.exports = Employee