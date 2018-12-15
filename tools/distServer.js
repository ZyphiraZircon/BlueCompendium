/* eslint-disable */
import express from 'express';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */

const port = process.env.PORT || 8081;
const expressStaticGzip = require("express-static-gzip");
const app = express();
const forceSsl = require('force-ssl-heroku');

app.enable('trust proxy');
app.use(forceSsl);
app.use("/", expressStaticGzip("dist"));
// app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(new Date().toUTCString() + 'Started on port: ' + port);
    open(`http://localhost:${port}`);
  }
});
