'use strict';

var assets = require('./tasks/assets');
var browserSync = require('./tasks/browser_sync');
var build = require('./tasks/build');
var jshint = require('./tasks/jshint');
var sass = require('./tasks/sass');
var uglify =require('./tasks/uglify');
var templates = require('./tasks/templates');

module.exports = [
  build,
  assets,
  browserSync,
  jshint,
  sass,
  uglify,
  templates
];
