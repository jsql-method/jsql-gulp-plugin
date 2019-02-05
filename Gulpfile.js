/*
 * jsql
 *
 * Copyright (c) 2018 JSQL
 * Licensed under the ISC license.
 */

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var options = {
    apiKey: '==iSqF8rKvVeSgqudKDOXpjiFgGMJh1PbeouIz9IW/YQ==9CI8ox66gogpoSXm6yrU',
    src: 'scr',
    dist: 'dist',
    watcher: ''
};

gulp.task('default', function() {
    plugins.jsql(options);
});