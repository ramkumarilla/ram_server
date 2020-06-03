const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const config = require('./config');

const passport = require('passport');
const path = require('path');

require("./models/users");
require("./services/passport");

const usersRoutes = require('./routes/users'),
      apiRoutes = require('./routes/api');

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('DB Connected!'))
  .catch(err => console.log(err));

const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server, {pingTimeout: 60000})

require('./socket')(io)

app.use(cors())
app.use(bodyParser.json());

app.use('/api/v1', apiRoutes)
app.use('/api/v1/users', usersRoutes);

const PORT = process.env.PORT || 3002;

server.listen(PORT , function() {
  console.log('App is running on port: ' + PORT);
});
