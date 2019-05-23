/*
 * Copyright (c) 2017-2019 JSQL Sp. z.o.o. (Ltd, LLC) www.jsql.it
 * See LICENSE or https://jsql.it/public-packages-license
 */

'use strict';

const execSync = require('child_process').execSync;
const PLUGIN_NAME = 'jsql';

module.exports = function (options) {

    let command = 'node ' + require.resolve('jsql-cli') +
        ' --apiKey=' + options.apiKey +
        ' --input=' + options.src +
        ' --output=' + options.dist +
        ' --env=' + (options.env ? options.env : 'prod') +
        (options.devKeyFileName ? ' --devKeyFileName=' + options.devKeyFileName : '') +
        (options.debug ? ' --debug ' : '');

    console.log(execSync(command).toString());

};
