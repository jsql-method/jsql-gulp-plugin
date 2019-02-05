# gulp-jsql
#### A Gulp plugin to change sql queries to hash for JSQL.

## Getting Started
This plugin requires Gulp `^3.9.0`

If you haven't used [Gulp](http://gulpjs.com/) before, be sure to check out the [Getting Started](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/getting-started.md) guide, as it explains how to create a [Gruntfile](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/getting-started.md) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install gulp-jsql
```
To include `gulp-jsql` plugin and others plugins you should use `gulp-load-plugins` [read more](https://www.npmjs.com/package/gulp-load-plugins), you may install this plugin with this command:
```shell
npm install gulp-load-plugins
```
To use it add this line:
```shell
var plugins = require('gulp-load-plugins')();
```
Define the options that are required to properly run the grunt-jsql plugin adding this:
```shell
var options = {
    apiKey: '==iSqF8rKvVeSgqudKDOXpjiFgGMJh1PbeouIz9IW/YQ==9CI8ox66gogpoSXm6yrU',
    src: 'scr',
    dist: 'dist',
    watcher: ''
};
```
Once the plugin has been installed, it may be enabled inside your Gruntfile with this lines of code:

```js
gulp.task('default', function() {
    plugins.jsql(options);
});
```
