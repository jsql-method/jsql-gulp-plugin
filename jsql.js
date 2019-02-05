/*
 * jsql
 *
 * Copyright (c) 2018 JSQL
 * Licensed under the ISC license.
 */

'use strict';

const { execFile } = require('child_process');

module.exports = function(opts){

    execFile('node', [require.resolve('npm-jsql'), opts.apiKey, opts.src, opts.dist, opts.watcher], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      console.log(stdout);
    });

};
