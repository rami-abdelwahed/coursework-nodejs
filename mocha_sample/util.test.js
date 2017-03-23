const util = require('./util/util');
const expect = require('expect');

it("Should add 2 numbers", () => {
    expect(util.add(1, 2)).toBe(3);
});

it("Should update the user object with first/last names", () => {
    var user = {
        id: 1,
        age: 38
    };
    util.updateUser(user, 'Rami Abdelwahed');
    expect(user).toInclude({firstName: 'Rami', lastName: 'Abdelwahed'});
});
