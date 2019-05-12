/*
 * Copyright (c) 2017-2019 JSQL Sp. z.o.o. (Ltd, LLC) www.jsql.it
 * See LICENSE or https://jsql.it/public-packages-license
 */

let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();
plugins.jsql = require('./jsql');

let options = {
    apiKey: 'dawid.senko@jsql.it',
    src: 'test/test.js',
    dist: 'test/dist/test.min.js',
    devKeyFileName: 'test-key.key',
    debug: true,
    local: true
};

gulp.task('test', function() {
    plugins.jsql(options);
});