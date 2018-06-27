const bodyParser = require('body-parser');
const express = require('express');

var app = express();
var fs = require('fs');
var obj;
var newData = [];

const dataModule = require('./data');
let data = dataModule.getData();    

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.get('/', (req, res) => {
    console.log("home page");
    res.sendFile(__dirname + '/home.html');
});

app.get('/test', (req, res) => { //This route is only for testing purposes
    res.send(data);
});

app.post('/api/meters', (req,res) => {
	console.log("received");
	var meterID = req.body.meterID;
	var startDate = req.body.startDate;
	var endDate = req.body.endDate;
	var response = data.map(function(item,index){
		console.log(item[0]);
		
	});
	res.send(data[0]);
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
