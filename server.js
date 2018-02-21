const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const LocationsCtrl = require('./controllers/LocationsCtrl');

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
});

app.use(bodyParser.json());
app.use(cors());

app.get('/api/locations', LocationsCtrl.read);
app.post('/api/locations', LocationsCtrl.create);

app.listen(port, () => {
  console.log('listening on port', port);
});