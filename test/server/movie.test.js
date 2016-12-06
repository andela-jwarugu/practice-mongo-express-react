const expect = require('chai').expect;
const app = require('../../server');
const request = require('supertest')(app);

describe('movie controller tests', () => {
  it('creates a movie', (done) => {
    request
      .post('/api/movies')
      .send({
        title: 'Billions',
        description: 'About billions',
        genre: 'Drama'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(res.body.title).to.be.equal('Billions');
        expect(res.body.description).to.be.equal('About billions');
        expect(res.body.genre).to.exist;
        done();
      })
  })

  it('returns a list of movies', (done) => {
    request
      .get('/api/movies')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(Array.isArray(res.body)).to.be.true;
        expect(res.body).to.have.length(4);
        done();
      })
  })

  it('returns a list of movies based on title search', (done) => {
    request
      .get('/api/movies?title=Billions')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(Array.isArray(res.body)).to.be.true;
        expect(res.body).to.have.length(1);
        done();
      })
  })

  it('returns a list of movies based on genre search', (done) => {
    request
      .get('/api/movies?genre=Drama')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(Array.isArray(res.body)).to.be.true;
        expect(res.body).to.have.length(3);
        done();
      })
  })

})
