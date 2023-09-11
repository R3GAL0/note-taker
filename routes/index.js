const express = require('express');

// Import our modular routers for /tips and /feedback
const notes = require('./notes');
// const feedbackRouter = require('./feedback');

const app = express();

app.use('/notes', notes);
// app.use('/feedback', feedbackRouter);

module.exports = app;
