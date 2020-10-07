const express = require('express');
const app = new express();
const mainRouter = require('./routes/mainRouter');
const adminRouter = require('./routes/adminRouter');

//middleware
app.use(express.json());
app.use('/public', express.static(`${__dirname}/../public`));
app.use('/static',express.static(`${__dirname}/../build/static`));

//routes
app.use('/', mainRouter);
app.use('/admin', adminRouter);

module.exports = app;