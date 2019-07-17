'use strict';

const app = require('../src/app');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

describe('API Tests', function() {
    let test = {
      title: 'integration test',
      content: 'This is a mock content'
    };
  
    describe('## Create a text ', function() {
      it('should create a text', function(done) {
        request(app)
          .post('/api/texts')
          .send(test)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.message).to.equal('Text created');
            done();
          });
      });
    });
  
    describe('# Get all texts', function() {
      it('should get all texts', function(done) {
        request(app)
          .get('/api/texts')
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('array');
            done();
          });
      });
    });

    describe('Get a text by id', function() {
      it('should get a text', function(done) {
        request(app)
          .get('/api/texts/' + task._id)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.body.name).to.equal('integration test');
            done();
          });
      });
    });
  
    describe('Update a text', function() {
      it('should modify a text', function(done) {
        test.title = 'New Title'
        request(app)
          .put('/api/texts/' + test._id)
          .send(test)
          .end(function(err, res) {
            expect(res.body.name).to.equal('New Title');
            expect(res.statusCode).to.equal(200);
            done();
          });
      });
    });
    
    describe('Delete a text by id', function() {
      it('should delete a text', function(done) {
        request(app)
          .delete('/api/texts/' + task._id)
          .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.body.message).to.equal('Text deleted');
            done();
          });
      });
    });
  });
