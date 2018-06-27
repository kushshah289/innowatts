const geo = require('./geocode');

module.exports = function(app) {
  app.post('/resolve', (req, res) => {
    //console.log("-----");
    var address = req.body.address;
    //res.send(address);
    geo.geocodeAddress(address, (errorMessage, results) => {
    	if(errorMessage){
    		console.log(errorMessage);
  		} else {
  			console.log("ppp");
			console.log(results.address);
			console.log(results.latitude);
			console.log(results.longitude);
		}
    })
    res.send(req.body.address);
  });
};