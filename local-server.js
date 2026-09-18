const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqUrl = decodeURI(req.url.split('?')[0]);
  if (reqUrl === '/') {
    reqUrl = '/index.html';
  }

  let filePath = path.join(BASE_DIR, reqUrl);

  // Security check to avoid path traversal outside BASE_DIR
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('403 Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end(`404 Not Found: ${reqUrl}`);
    }

    if (stats.isDirectory()) {
      // Check for code.html or index.html in directory
      const codeHtml = path.join(filePath, 'code.html');
      const indexHtml = path.join(filePath, 'index.html');
      if (fs.existsSync(codeHtml)) {
        filePath = codeHtml;
      } else if (fs.existsSync(indexHtml)) {
        filePath = indexHtml;
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end(`404 No default page in directory: ${reqUrl}`);
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end(`500 Internal Error: ${readErr.message}`);
      }

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚗 DriveMe Learner Portal Server running!`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`📂 Serving: ${BASE_DIR}`);
  console.log(`====================================================`);
});
