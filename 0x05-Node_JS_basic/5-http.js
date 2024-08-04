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
        const studentMessage = await countStudents(process.argv[2]);
        message += studentMessage;
        response.writeHead(200, { 'Content-Type': 'text/plain' });
      } catch (error) {
        message = 'Cannot load the database';
        response.writeHead(500, { 'Content-Type': 'text/plain' });
      }
      response.end(message);
      break;
    default:
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('Not Found');
      break;
  }
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end(message);
});

app.listen(PORT);

module.exports = app;
