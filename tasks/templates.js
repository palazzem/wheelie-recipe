'use strict';

var Task = require('wheelie/lib/models/task');


function config(globals) {
  var source = globals.src + 'templates/**';

  return {
    watcher: source,
    src: source,
    dest: globals.dest + '/'
  };
}

function run(gulp, config) {
  return function() {
      return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
  };
}

module.exports = new Task('templates', [], run, config);
