const {networkInterfaces} = require('os'); //temporal
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const routes = require('./src/routes/routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json({'limit':'5mb'}));
app.disable('x-powered-by');

app.all('*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, auth, Content-Length, X-Requested-With');
  next();
});

app.use('/api', routes);

app.listen(port, () => {
  const IP = getIpAddress();
  console.log(`Servidor - http://localhost:${port}`);
  console.log(`Servidor - http://${IP}:${port}`);
});

function getIpAddress() {
  const wf = networkInterfaces()['Wi-Fi'];

  const IP = wf.filter(nt => {
    return nt.family == 'IPv4';
  });

  return IP[0].address;
}