'use strict';

var assets = require('./tasks/assets');
var browserSync = require('./tasks/browser_sync');
var build = require('./tasks/build');
var jshint = require('./tasks/jshint');
var sass = require('./tasks/sass');
var templates = require('./tasks/templates');
var handlebars = require('./tasks/handlebars');
var watch = require('./tasks/watch');

module.exports = [
  assets, browserSync, build, jshint, sass, templates, handlebars, watch
];
