var gulp = require('gulp');
var wheelie = require('wheelie');
var recipe = require('../index');

describe('The recipe', function() {
  it('should provide a set of tasks', function() {
    expect(recipe.length).to.be.equal(9);
  });
});
