// Module dependencies
import express from 'express';
import path from 'path';
import sass from 'node-sass-middleware';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';

const app = express();

// Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/traveler');


// Routes
import carriers from './src/routes/carriers';
import stops from './src/routes/stops';
import users from './src/routes/users';
import auth from './src/routes/auth';


// Configuration
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


// Middleware
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(sass({
  src: path.join(__dirname, 'src/sass'),
  dest: path.join(__dirname, 'public/css'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/css'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// API
app.use('/api/carriers', carriers);
app.use('/api/stops', stops);
app.use('/api/users', users);
app.use('/api/auth', auth);


// Main
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


// Export app
module.exports = app.listen(
  app.get('port'),
  () => console.log(`Running on localhost:${app.get('port')}`)
);


// Error handling middleware
app.use((err, req, res, next) => {
  if(res.headersSent)
    return next(err);

  res.status(500).json({ error: err });
})