const http = require('http');

/**
 * Create a simple HTTP server that responds with "Hello Holberton School!"
 * for any endpoint.
 */
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
