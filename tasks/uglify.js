'use strict';

var Task = require('wheelie/lib/models/task');
var handlers = require('wheelie/lib/errors/handlers');
var noop = require('wheelie/lib/helpers/noop');

// external plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


function config(globals) {
  return {
    scripts: [],
    scriptsPath: globals.src + 'js/',
    vendors: [],
    vendorsPath: 'vendors/',
    outputName: 'app.js',
    dest: globals.dest + 'js/'
  };
}

function run(gulp, config, globals) {
  // appends the 'src' folder the the scripts array
  config.scripts = config.scripts.map(function(scriptName) {
    return config.scriptsPath + scriptName;
  });

  // appends the 'vendors' folder the the vendors array
  config.vendors = config.vendors.map(function(scriptName) {
    return config.vendorsPath + scriptName;
  });

  // merging them
  config.src = config.vendors.concat(config.scripts);

  if (!globals.production) {
    uglify = noop;
  } else {
    sourcemaps = {
      init: noop,
      write: noop
    };
  }

  return function() {
    return gulp.src(config.src, { base: './'})
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .on('error', handlers.notifyError)
      .pipe(concat(config.outputName))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dest));
  };
}

module.exports = new Task('uglify', [], run, config);
