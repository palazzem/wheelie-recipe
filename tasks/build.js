'use strict';

var Task = require('wheelie/lib/models/task');


module.exports = new Task('build', ['sass', 'assets', 'templates', 'handlebars']);
