/*
 * Copyright (c) 2018 JSQL Sp.z.o.o. (Ltd, LLC) www.jsql.it
 * Licensed under the ISC license
 */

'use strict';

const { execFile } = require('child_process');
const PLUGIN_NAME = 'jsql';

module.exports = function(opts){

    execFile('node', [require.resolve('jsql-cli'), opts.apiKey, opts.src, opts.dist, opts.watcher], (error, stdout, stderr) => {

      if (error) {
        throw error;
      }

      console.log(stdout);

    });

};
