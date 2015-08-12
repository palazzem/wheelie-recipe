'use strict';

var Task = require('wheelie/lib/models/task');

var dependencies = [
  'sass', 'assets', 'templates', 'handlebars', 'uglify'
];

module.exports = new Task('build', dependencies);
