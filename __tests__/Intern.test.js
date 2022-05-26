// I am not notating the individual tests because the string in the test() should do a good job of explaining what they are testing for.
const Intern = require('../lib/Intern');

test('check that an Intern object has been created', () => {
    const intern = new Intern('Jordan', 50, 'jthomas135@hotmail.com', 'UC Davis');

    expect(intern.school).toEqual(expect.any(String));
});

test('check that we recieve the intern school name', () => {
    const intern = new Intern('Jordan', 50, 'jthomas135@hotmail.com', 'UC Davis');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('check that we recieve employees role of intern', () => {
    const intern = new Intern('Jordan', 50, 'jthomas135@hotmail.com', 'UC Davis');

    expect(intern.getRole()).toEqual('Intern');
})