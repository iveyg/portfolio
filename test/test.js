var chai = require('chai');

var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should;
var assert = require('chai').assert;

chai.use(chaiHttp);

describe('Testing requests to the site', function () {
	
	it('should return main page for GET request to /', function () {
		chai.request(server)
			.get('/')
			.end(function(err, res) {
				res.should.have.status(200);
				done();
			})
	});

	it('should return 200 status /users route', function () {
		chai.request(server)
			.get('/users')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			})
	})

	it('should return 200 status for /stack route', function () {
		chai.request(server)
			.get('/stack')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			})
	});

});


