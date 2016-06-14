var _ = require('lodash');
var baseConfig = require('./base').baseConfig;
var configurator = require('./base').configurator;

var prodConfig = { name: 'bok-inventory',
    config_vars: { NODE_ENV: 'production' },
};


var prod = _.merge({},baseConfig,prodConfig);
configurator(prod);
