const config = require('config');
const http = require('http');

const GUID = Math.floor(Math.random() * 10000);
const startDate = new Date();

const data = {
  configFile: config.get('configFile'),
  secret: config.get('secret')
};

const server = http.createServer((req, res) => {
  const html = `
    <html>
      <body>
        <h2>Hello!</h2>
        <p>My GUID: ${GUID}</p>
        <p>Current time: ${new Date().toLocaleString()}</p>
        <p>Uptime: ${Number((Date.now() - startDate.valueOf()) / 1000)} sec</p>
        <p>Config:</p>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      </body>
    </html>`;

  res.end(html);
});

server.listen(8000);

console.log('Server is listening at 8000');
