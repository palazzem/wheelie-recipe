'use strict';

var Task = require('wheelie/lib/models/task');

// external plugins
var browserSync = require('browser-sync');


function config(globals) {
  return {
    server: {
      baseDir: globals.dest
    },
    files: [
      globals.dest + '/**',
      '!' + globals.dest + '/**.map'
    ],
    port: 3000,
    open: false,
    logFileChanges: false,
    logLevel: 'info'
  };
}

function run(gulp, config) {
  return function() {
    browserSync(config);
    return gulp;
  };
}

module.exports = new Task('browser-sync', [], run, config);
