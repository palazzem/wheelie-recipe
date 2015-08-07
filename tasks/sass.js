'use strict';

var Task = require('wheelie/lib/models/task');
var handlers = require('wheelie/lib/errors/handlers');

// external plugins
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


function config(globals) {
  return {
    src: globals.src + '/scss/**/*.{sass,scss}',
    dest: globals.dest + '/css',
    sourceComments: 'map',
    imagePath: '/images',
    autoprefixer: ['last 2 version']
  };
}

function run(gulp, config) {
  return function() {
      return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(sass(config))
        .on('error', handlers.notifyError)
        .pipe(autoprefixer({ browsers: config.autoprefixer }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({ stream:true }));
  };
}

module.exports = new Task('sass', [], run, config);
