const util = require('./util/util');
const expect = require('expect');

it("should add 2 numbers", () => {
    expect(util.add(1, 2)).toBe(3).toBeA('number');
});

it("should update the user object with first/last names", () => {
    var user = {
        id: 1,
        age: 38
    };
    util.updateUser(user, 'Rami Abdelwahed');
    expect(user).toInclude({firstName: 'Rami', lastName: 'Abdelwahed'});
});


it("should square a number", (done) => {
    util.square(2, (result) => {
        expect(result).toBeA('number').toBe(4);
        done();
    });
});