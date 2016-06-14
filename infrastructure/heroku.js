var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator.export('bok-inventory').then(function (result) {
    console.log(result);
})
