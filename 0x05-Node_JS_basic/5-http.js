const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const app = http.createServer(async (request, response) => {
  let message = '';
  switch (request.url) {
    case '/':
      message = 'Hello Holberton School!';
      break;
    case '/students':
      message = 'This is the list of our students\n';
      try {
        message += await countStudents(process.argv[process.argv.length - 1]);
      } catch (error) {
        message = '';
      }
      break;
    default:
      break;
  }
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end(message);
});

app.listen(PORT);

module.exports = app;
