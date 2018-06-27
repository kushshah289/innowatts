const request = require('request');
const API_KEY = "AIzaSyDtVbli-DqEY984NnMwLOyl2zh0ZaQZBRQ";

var geocodeAddress = (address, callback) => {
  //console.log(`http:\/\/maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&address=${address}`);
  request({
    url: `https:\/\/maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&address=${address}`,
    json: true
  }, (error , response, body) => {
    if(error){
      callback('Unable to connect to Google Servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find the address.');
    } else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
      }
  });
}

module.exports = {
  geocodeAddress
}
