const http = require('http');

const PORT = 1245;
// Create a node server
const app = http.createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});
app.listen(PORT);

module.exports = app;
