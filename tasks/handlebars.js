'use strict';

var Task = require('wheelie/lib/models/task');

// external plugins
var path = require('path');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var handlebars = require('gulp-handlebars');


function config(globals) {
  return {
    src: globals.src + '/partials/**',
    dest: globals.dest + '/js',
    namespace: 'Templates'
  };
}

function run(gulp, config) {
  return function() {
    var partials = gulp.src(config.src + '/_*.hbs')
      .pipe(handlebars())
      .pipe(wrap('Handlebars.registerPartial(' +
                 '<%= processPartialName(file.relative) %>,' +
                 'Handlebars.template(<%= contents %>));', {}, {
        imports: {
          processPartialName: function(fileName) {
            // strips the extension and the underscore and
            // escapes the output with JSON.stringify
            return JSON.stringify(path.basename(fileName, '.js').substr(1));
          }
        }
      }));

    var templates = gulp.src(config.src + '/[^_]*.hbs')
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
        namespace: config.namespace,
        noRedeclare: true
      }));

    return merge(partials, templates)
      .pipe(concat('templates.js'))
      .pipe(gulp.dest(config.dest));
  };
}

module.exports = new Task('handlebars', [], run, config);
