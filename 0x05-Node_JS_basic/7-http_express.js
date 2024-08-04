const express = require('express');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const app = express();

app.get('/', (req, res) => {
  res.status(200).contentType('text/plain').end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let message = 'This is the list of our students\n';
  countStudents(process.argv[process.argv.length - 1])
    .then((data) => {
      message += data;
      res.status(200).contentType('text/plain').end(message);
    })
    .catch((error) => {
      console.error(error);
      res.contentType('text/plain').end(error ? error.message : '');
    });
});

app.listen(PORT);

module.exports = app;
