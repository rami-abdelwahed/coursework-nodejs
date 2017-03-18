const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

var argv = yargs.option({
    'a': {
        alias: 'address',
        demandOption: true,
        describe: 'The required address.',
        type: 'string'
    }
})
    .help()
    .argv;

geocode.geocodeAddress(argv.address).then((result) => {

    console.log(`Formatted address: ${result.address}`);
    return weather.getTemperature(result.latitude, result.longitude);
}).then(weatherResult => {
    console.log(JSON.stringify(weatherResult, undefined, 2));
}).catch((error) => {
    console.log(error);
});
