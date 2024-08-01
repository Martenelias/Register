const express = require('express');
const path = require('path');
const htmlService = require('./services/htmlService');
const registerRouter = require('./services/register');

const port = 3000;
const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.listen(port, () => {
  console.log('Server is running!');
});
