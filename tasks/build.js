'use strict';

var Task = require('wheelie/lib/models/task');

var dependencies = [
  'sass',
  'assets',
  'templates',
  'uglify',
  'browser-sync',
  'jshint'
];

module.exports = new Task('build', dependencies);
