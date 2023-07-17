const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! By Kushagra Singh, Version 18\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
