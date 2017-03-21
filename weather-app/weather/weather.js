const request = require('request');

const secretKey = '36e3a451ce9ba823dcc2465e8891a1c0';
const endPoint = 'https://api.darksky.net/forecast';

var getTemperature = function (latitude, longitude) {
    var url = `${endPoint}/${secretKey}/${latitude},${longitude}`;
    return new Promise((resolve, reject) => {
        request({
            url: url, json: true
        }, function (error, response, body) {
            if (error) {
                reject('Unable to connect to forcast servers.')
            } else if (response.statusCode === 200) {
                resolve({
                    temperature: (body.currently.temperature - 32) * 5/9,
                    summary: body.currently.summary
                });
            } else {
                reject(body);
            }
        });
    });

}


module.exports = {
    getTemperature
};