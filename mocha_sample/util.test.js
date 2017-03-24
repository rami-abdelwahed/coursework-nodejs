const util = require('./util/util');
const expect = require('expect');

describe('Utils', () => {
    it("should add 2 numbers", () => {
        expect(util.add(1, 2)).toBe(3).toBeA('number');
    });

    it("should add 2 numbers - async", (done) => {
        util.asyncAdd(12, 12, (result) => {
            expect(result).toBeA('number').toBe(24);
            done();
        });
    });
    it("should square a number", () => {
        expect(util.square(3, 3)).toBeA('number').toBe(9);

    });

    it("should square a number - async", (done) => {
        util.asyncSquare(2, (result) => {
            expect(result).toBeA('number').toBe(4);
            done();
        });
    });
    describe('#update user', () => {
        it("should update the user object with first/last names", () => {
            var user = {
                id: 1,
                age: 38
            };
            util.updateUser(user, 'Rami Abdelwahed');
            expect(user).toInclude({ firstName: 'Rami', lastName: 'Abdelwahed' });
        });
    })
});






