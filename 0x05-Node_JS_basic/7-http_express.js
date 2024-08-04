const express = require('express');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const app = express();

app.get('/', (req, res) => {
  res.status(200).contentType('text/plain').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let message = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]);
    message += data;
    res.status(200).contentType('text/plain').send(message);
  } catch (error) {
    res.status(500).contentType('text/plain').send('Cannot load the database');
  }
});

app.listen(PORT);

module.exports = app;
