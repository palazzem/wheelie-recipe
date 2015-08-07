'use strict';

var Task = require('wheelie/lib/models/task');
var handlers = require('wheelie/lib/errors/handlers');

// external plugins
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');


function config(globals) {
  return {
    src: [
      'gulpfile.js',
      globals.src + '/js/**/*.js'
    ]
  };
}

function run(gulp, config) {
  return function() {
      return gulp.src(config.src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .on('error', handlers.notifyError);
  };
}

module.exports = new Task('jshint', [], run, config);
