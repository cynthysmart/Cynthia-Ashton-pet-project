const http = require('http');
const path = require('path');
const fs = require('fs');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { Console } = require('console');

const server = http.createServer((req, res) => {
    if (req.url === '/about'){
      fs.readFile(
        path.join(__dirname, 'public', 'about.html'), 
        (err, content) => {
          if (err) throw err;
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      );
    }

    if(req.url === '/api/users'){
      const users = [
        { name: 'Bob Smith', age: 40 },
        { name: 'Cynthia Tochi', age: 30 },
        { name: 'BiModal Consulting', age: 5 }
      ];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
      
    }

    //Build file path
    //let filePath = path.join(__dirname, 'public', req.url === '/' ?
    //'index.html' : req.url);
    //Extension of the file

});



const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log('Server running on port ${PORT}'));

