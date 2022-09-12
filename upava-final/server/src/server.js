var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("../src/db/connections");

const authRoutes = require('./routes/auth');
const donateRoute = require('./routes/donation');
const userRoute = require('./routes/user');
const aboutRoute = require('./routes/about');
const newsRoute = require('./routes/news');
const eventRoute = require('./routes/events');
const galleryRoute = require('./routes/gallery');
const feedbackRoute = require('./routes/feedback');


var app = express();
var port = process.env.PORT || 4000;

// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/auth', authRoutes);
app.use('/api/donate', donateRoute);

app.use('/api/user', userRoute);

app.use('/api/about', aboutRoute);

app.use('/api/news', newsRoute);

app.use('/api/event', eventRoute);

app.use('/api/gallery', galleryRoute);

app.use('/api/feedback', feedbackRoute);

app.listen(port, () => {
  console.log('Server started on: ' + port);
});