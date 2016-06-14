
var _ = require('lodash');
var baseConfig = require('./base').baseConfig;
var configurator = require('./base').configurator;


var devConfig = { name: 'bok-inventory-dev',
    config_vars: { NODE_ENV: 'development' },
};

var dev = _.merge({},baseConfig,devConfig);


configurator(dev);
