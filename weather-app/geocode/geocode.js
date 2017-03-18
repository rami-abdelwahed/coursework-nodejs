
const request = require('request');

const endPoint = 'https://maps.googleapis.com/maps/api/geocode/json';

var geocodeAddress = function (address) {
    var url = `${endPoint}?address=`;
    url += encodeURI(address);
    return new Promise((resolve, reject) => {
        request({
            url: url, json: true
        }, function (error, response, body) {
            if (error) {
                reject('Unable to connect to Google servers.')
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address.')
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    longitude: body.results[0].geometry.location.lng,
                    latitude: body.results[0].geometry.location.lat
                });
            }
        });
    });
}


module.exports = {
    geocodeAddress
};