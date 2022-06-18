const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
});

server.listen(port, hostname, () => {
  console.log(`Is your server running at http://${hostname}:${port}?`);
});