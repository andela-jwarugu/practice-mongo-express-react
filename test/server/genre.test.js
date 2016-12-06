const expect = require('chai').expect;
const app = require('../../../server');
const request = require('supertest')(app);

describe('genre controller tests', () => {
  it('creates new genre', (done) => {
    request
      .post('/api/genres')
      .send({
        title: 'Horror'
      })
      .end((res, err) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.defined();
        expect(res.body.title).to.equal('Horror');
      })
  })

  it('asserts no duplicates can be created', (done) => {
    request
      .post('/api/genres')
      .send({
        title: 'Horror'
      })
      .end((res, err) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('name must be unique');
      })
  })

  it('returns a list of genres', (done) => {
    request
      .get('/api/genres')
      .end((res, err) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.defined();
        expect(Array.isArray(res.body)).to.be.true;
        expect(res.body.length).to.be.true;
      })
  })
})
