const express = require('express')
const app = express()

require('ts-node/register');

app.get('/', async (req, res) => {

  console.log('Starting...');
  const { main } = require('./examples/upload-photo.example.ts');
  await main();
  console.log('Done!');

  res.send('Done....');
})
 
app.listen(3000)