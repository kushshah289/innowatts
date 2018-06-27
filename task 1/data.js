var fs = require('fs');
function tryParseJSON (jsonString){
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    return false;
};
module.exports = {
   getData: function() {
      var data = fs.readFileSync('./tmp.json', 'utf8');
		var tmp = tryParseJSON(data);	
		return tmp;
   }
}