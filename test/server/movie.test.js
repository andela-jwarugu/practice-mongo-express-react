const expect = require('chai').expect;
const app = require('../../../server');
const request = require('supertest')(app);

describe('movie controller tests', () => {
  it('creates a movie', (done) => {
    request
      .post('/api/movies')
      .send({
        title: 'Billions',
        description: 'About billions'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.defined();
        expect(res.body.title).to.be.equal('Billions');
        expect(res.body.description).to.be.equal('About billions');
        done();
      })
  })

  it('creates a movie with associated category', (done) => {
    request
      .post('/api/movies')
      .send({
        title: 'Billions',
        description: 'About billions',
        genre: 'Drama'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.defined();
        expect(res.body.title).to.be.eql('Billions');
        expect(res.body.description).to.be.eql('About billions');
        expect(res.body.genre).to.be.eql('Drama');
        done();
      })
  })

  it('returns a list of movies', (done) => {
    request
      .get('/api/movies')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.defined();
        expect(Array.isArray(res.body)).to.be.true;
        expect((res.body).length).to.be.true;
        done();
      })
  })

  it('returns a list of movies based on title search', (done) => {
    request
      .get('/api/movies?title=Billions')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.defined();
        expect(Array.isArray(res.body)).to.be(true);
        expect((res.body).length).to.be(true);
        done();
      })
  })

  it('returns a list of movies based on genre search', (done) => {
    request
      .get('/api/movies?title=Billions')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.defined();
        expect(Array.isArray(res.body)).to.be.true;
        expect((res.body).length).to.be.true;
        done();
      })
  })

})
