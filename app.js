require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const htmlService = require('./services/htmlService');
const registerRouter = require('./routes/register');
const authRouter = require('./routes/auth');
const refresh = require('./routes/refresh');
const logout = require('./routes/logout');
const verifyJWT = require('./services/verifyJWT');
const connectDB = require('./services/dbConn');

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

app.use('/signup', registerRouter);
app.use('/signin', authRouter);
app.use('/refresh', refresh);
app.use('/logout', logout);

app.get('/members', async (req, res) => {
  try {
    const users = require('./model/users.json');
    const html = htmlService.generateMembers(users);
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.use('/members', verifyJWT);

app.get('/members/:id', (req, res) => {
  const html = htmlService.generateMembersDetail();
  res.send(html);
});

mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB');
  app.listen(port, () => {
    console.log('Server is running!');
  });
});
