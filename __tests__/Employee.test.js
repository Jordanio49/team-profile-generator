// I am not notating the individual tests because the string in the test() should do a good job of explaining what they are testing for.
const Employee = require('../lib/Employee');

test('check that an employee object was created', () => {
    const employee = new Employee('Jordan', 50, 'jthomas135@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('check that we recieve employee name', () => {
    const employee = new Employee('Jordan', 50, 'jthomas135@hotmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('check that we recieve employee id', () => {
    const employee = new Employee('Jordan', 50, 'jthomas135@hotmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('check that we recieve employee email', () => {
    const employee = new Employee('Jordan', 50, 'jthomas135@hotmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('check that we recieve employees role', () => {
    const employee = new Employee('Jordan', 50, 'jthomas135@hotmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});