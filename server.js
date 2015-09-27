// TODO: Set up Nodemon
// TODO: Set up browsersync to watch js files
// TODO: Set up basic socket.io example
const express = require('express');
const app = express();

//app.use(express.static('bin'));
app.get('/', function(req, res) {
  res.send('hola mundo genial');
});

const server = app.listen(3006, function() {
  const port = server.address().port;
  console.log(`Listening on port ${port}`);
});
