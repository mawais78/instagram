const express = require('express')
const app = express()

require('ts-node/register');

app.get('/', async (req, res) => {
  res.send('App is working...');
})

app.get('/upload', async (req, res) => {

  console.log('Starting...');
  const { main } = require('./examples/upload-photo.example.ts');
  await main();
  console.log('Done!');

  res.send('Done....');
})
 
let port = process.env.PORT || 3000;

app.listen(port);