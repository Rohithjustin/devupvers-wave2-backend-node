// console.log("Hello, this is my first Node.js app!");

const http = require('http');

const server = http.createServer((req, res) => {
 res.write('Hello Monisha, welcome to Node.js server!');
  res.end();
});

server.listen(3000, () => {
console.log('Server running at http://localhost:3000');
 });