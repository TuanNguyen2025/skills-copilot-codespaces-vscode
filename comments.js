// Create web server
// Create a web server that listens to requests for comments and returns a list of comments in JSON format. The comments are stored in a file called comments.json. You can use the following code to read the comments from the file:

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.json', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error reading comments');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// You can start the server by running the following command:

// node comments.js

// The server should now be running on http://localhost:3000. You can access the comments by visiting http://localhost:3000 in your web browser or using a tool like cURL.

// To stop the server, press Ctrl + C in the terminal where the server is running.

// Task
// Create a web server that listens to requests for comments and returns a list of comments in JSON format. The comments are stored in a file called comments.json. You can use the following code to read the comments from the file:

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   fs.readFile('./comments.json', (err, data) => {
//     if (err) {
//       res.writeHead(500);
//       res.end('Error reading comments');
//       return;
//     }
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(data);
//   });
// });

// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

// You can start the server by running the following command:

// node comments.js

// The server should now be running on http://localhost:3000. You can access the comments by visiting http://localhost:3000 in your web browser or using a tool like cURL.

// To stop the server, press Ctrl + C in the terminal where the server is running.

// The comments.json file contains an array