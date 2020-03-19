console.log('running server...'); 
require('dotenv').config();

let apis  = require('./apis/apis');
const bodyParser = require('body-parser'); 
const path = require('path'); 
const port = process.env.PORT;

var cors = require('cors');
const express = require('express');
const app = express();
// Then use it before your routes are set up:
app.use(cors());
// init app
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json', limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  //res.send('hello world');
  res.sendFile(path.join(__dirname, 'build', 'index.html'),(err) =>{
    if (err) {
      res.status(500).send(err);
    }
  });
});
apis(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


