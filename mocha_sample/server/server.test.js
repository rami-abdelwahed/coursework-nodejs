const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;
describe('Get', () => {
    describe('/', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        message: 'Hello World!'
                    });
                })
                .end(done);
        });
    });

});
