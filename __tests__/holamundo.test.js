const request = require('supertest');
const app = require('../app');
describe('GET /', () => {
    it('responde con Hola Mundo!', done => {
        request(app)
        .get('/')
        .expect('Hola Mundo!', done);
    });
});