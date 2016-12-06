const expect = require('chai').expect;
const app = require('../../server');
const request = require('supertest')(app);

describe('genre controller tests', () => {
  it('creates new genre', (done) => {
    request
      .post('/api/genres')
      .send({
        title: 'Sci-Fi'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(res.body.title).to.equal('Sci-Fi');
        done();
      })
  })

  it('asserts no duplicates can be created', (done) => {
    request
      .post('/api/genres')
      .send({
        title: 'Horror'
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Duplicate Entry');
        done();
      })
  })

  it('returns a list of genres', (done) => {
    request
      .get('/api/genres')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(Array.isArray(res.body)).to.be.true;
        expect(res.body).to.have.length(4);
        done();
      })
  })
})
