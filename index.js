'use strict';

var assets = require('./tasks/assets');
var browserSync = require('./tasks/browser_sync');
var build = require('./tasks/build');
var jshint = require('./tasks/jshint');
var sass = require('./tasks/sass');
var uglify =require('./tasks/uglify');
var templates = require('./tasks/templates');
var watch = require('./tasks/watch');

module.exports = [
  assets, browserSync, build, jshint,
  sass, uglify, templates, watch
];
