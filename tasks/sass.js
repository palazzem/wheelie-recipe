'use strict';

var Task = require('wheelie/lib/models/task');
var handlers = require('wheelie/lib/errors/handlers');
var noop = require('wheelie/lib/helpers/noop');

// external plugins
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


function config(globals) {
  return {
    src: globals.src + 'scss/**/*.{sass,scss}',
    dest: globals.dest + 'css/',
    sourceComments: 'map',
    imagePath: 'images/',
    autoprefixer: ['last 2 version']
  };
}

function run(gulp, config, globals) {
  if (!globals.production) {
    minifyCss = noop;
  } else {
    sourcemaps = {
      init: noop,
      write: noop
    };
  }

  return function() {
      return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(sass(config))
        .on('error', handlers.notifyError)
        .pipe(autoprefixer({ browsers: config.autoprefixer }))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({ stream:true }));
  };
}

module.exports = new Task('sass', [], run, config);
