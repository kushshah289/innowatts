const bodyParser = require('body-parser');
const express = require('express');
//const geo = require('geocode');
const geo = require('./geocode');
var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

require('./resolve.js')(app, {});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
