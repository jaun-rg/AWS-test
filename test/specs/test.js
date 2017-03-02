var debug = require('debug')('TEST :: CI : Initial Test Example'); 
var expect = require('expect');

describe('A test suite example', function() {

 describe('A test', function() {

  it('step launch 1', function() {
   expect('something truthy').toExist();
   expect(null).toNotExist()
  });
 });

 describe('Other test', function() {

  it('step launch 2', function() {
   expect(5)
    .toBe(5, "ouch!!")
    .toBeA('number')

   expect(3.14)
    .toExist()
    .toBeLessThan(4)
    .toBeGreaterThan(3)
  });
  it('step launch 3', function() {
   expect('a string').toMatch(/string/)
  });

  });

 });
