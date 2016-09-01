'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./controllers/routes');
const morgan = require('morgan');
//const https = require('https');
//var ua = require('universal-analytics');


let app = express();


// var options = {
// };

// const server = https.createServer(options, app);
// const io = require('socket.io')(server);


// Configure view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('x-powered-by', false);

// io.on('connection', function(req, res) {
//     console.log(7777);
//     res.send('<h3>HELLO</h3>');
// });


// Configure middleware
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }));

// Static file serving happens everywhere but in production
if (process.env.NODE_ENV !== 'production') {
  let staticPath = path.join(__dirname, '..', '..', 'public');
  app.use('/static', express.static(staticPath));
}

// Add the "No Shenanigans" header to all responses under the "/todos" path
app.use('/todos', (request, response, next) => {
  response.set('X-Shenanigans', 'None');
  next();
});

// Mount application routes
routes(app);

// Export Express webapp instance
module.exports = app;
