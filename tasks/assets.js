'use strict';

var Task = require('wheelie/lib/models/task');


function config(globals) {
  var source = globals.src + 'assets/**';

  return {
    watcher: source,
    src: source,
    dest: globals.dest + 'assets/'
  };
}

function run(gulp, config) {
  return function() {
      return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
  };
}

module.exports = new Task('assets', [], run, config);
