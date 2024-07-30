const express = require('express');
const path = require('path');
const htmlService = require('./services/htmlService');

const port = 3000;
const app = express();
const publicPath = path.join(__dirname, 'styles');

app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const html = htmlService.generateHtmlResponse();
  res.send(html);
});

app.listen(port, () => {
  console.log('Server is running!');
});
