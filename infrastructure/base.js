var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);
//
// configurator.export('bok-inventory').then(function (result) {
//     console.log(result);
// })

var baseConfig = { 
    region: 'eu',
    stack: 'cedar-14',
    addons: { mongolab: { plan: 'mongolab:sandbox' } },
    collaborators: [ 'dskwarek@gmail.com', 'mart.tm@gmail.com' ],
    features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false },
        'http-sni': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: ['syslog://data.logentries.com:13636']
};

module.exports = {
    baseConfig: baseConfig,
    configurator: configurator
}