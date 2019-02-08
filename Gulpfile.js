/*
 * Copyright (c) 2018 JSQL Sp.z.o.o. (Ltd, LLC) www.jsql.it
 * Licensed under the ISC license
 */

let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();
plugins.jsql = require('./jsql');

let options = {
    apiKey: 'DEFAULT',
    src: 'test',
    dist: 'test/dist',
};

gulp.task('test', function() {
    plugins.jsql(options);
});