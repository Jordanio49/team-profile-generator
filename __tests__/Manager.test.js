// I am not notating the individual tests because the string in the test() should do a good job of explaining what they are testing for.
const Manager = require('../lib/Manager');

test('check that a manager object has been created', () => {
    const manager = new Manager('Jordan', 50, 'jthomas135@hotmail.com', 12);

    expect(manager.office).toEqual(expect.any(Number));
});

test('check that we recieve manager office number', () => {
    const manager = new Manager('Jordan', 50, 'jthomas135@hotmail.com', 12);

    expect(manager.getOffice()).toEqual(expect.any(Number));
});

test('check that we recieve employees role of manager', () => {
    const manager = new Manager('Jordan', 50, 'jthomas135@hotmail.com', 12);

    expect(manager.getRole()).toEqual('Manager');
});