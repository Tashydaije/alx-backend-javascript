const express = require('express');

const PORT = 1245;
const app = express();

app.get('/', (req, res) => {
  res.status(200).end('Hello Holberton School!');
});

app.listen(PORT);

module.exports = app;
