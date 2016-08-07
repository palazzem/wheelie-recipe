'use strict';

var logger = require('wheelie/lib/logging/logger');
var assets = require('./tasks/assets');
var browserSync = require('./tasks/browser_sync');
var build = require('./tasks/build');
var jshint = require('./tasks/jshint');
var sass = require('./tasks/sass');
var uglify =require('./tasks/uglify');
var templates = require('./tasks/templates');


// deprecation warning
logger.warning('[DEPRECATION] the recipe `wheelie-recipe` is deprecated; please migrate to `wheelie-recipes`');

module.exports = [
  build,
  assets,
  browserSync,
  jshint,
  sass,
  uglify,
  templates
];
