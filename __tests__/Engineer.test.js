// I am not notating the individual tests because the string in the test() should do a good job of explaining what they are testing for.
const Engineer = require('../lib/Engineer');

test('check that an engineer object has been created', () => {
    const engineer = new Engineer('Jordan', 50, 'jthomas135@hotmail.com', 'Jordanio49');

    expect(engineer.github).toEqual(expect.any(String));
});

test('check that we recieve github username', () => {
    const engineer = new Engineer('Jordan', 50, 'jthomas135@hotmail.com', 'Jordanio49');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test('check that we recieve employees role of engineer', () => {
    const engineer = new Engineer('Jordan', 50, 'jthomas135@hotmail.com', 'Jordanio49');

    expect(engineer.getRole()).toEqual('Engineer');
});

