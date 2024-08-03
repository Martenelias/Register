require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const htmlService = require('./services/htmlService');
const registerRouter = require('./routes/register');
const authRouter = require('./routes/auth');
const connectDB = require('./services/dbConn');
const refresh = require('./routes/refresh');
const logout = require('./routes/logout');

connectDB();

const port = 3000;
const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/', (req, res) => {
  const html = htmlService.generateHtmlResponse();
  res.send(html);
});

app.get('/signin', (req, res) => {
  const html = htmlService.generateSignin();
  res.send(html);
});

app.get('/signup', (req, res) => {
  const html = htmlService.generateSignup();
  res.send(html);
});
app.get('/members', (req, res) => {
  const html = htmlService.generateMembers();
  res.send(html);
});
app.get('/members/:id', (req, res) => {
  const html = htmlService.generateMembersDetail();
  res.send(html);
});
app.get('/test', (req, res) => {
  const html = htmlService.generateEmpty();
  res.send(html);
});
app.get('/register', (req, res) => {
  const html = htmlService.generateRegister();
  res.send(html);
});

app.use('/register', registerRouter);
app.use('/auth', authRouter);
app.use('/refresh', refresh);
app.use('/logout', logout);

mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB');
  app.listen(port, () => {
    console.log('Server is running!');
  });
});
