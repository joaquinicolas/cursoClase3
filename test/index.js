var assert = require('assert'),
    clase3 = require('..');

describe('clase-3', function() {
  it('should say hello', function(done) {
    assert.equal(clase3(), 'Hello, world');
    done();
  });
});

