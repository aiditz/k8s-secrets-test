const config = require('config');
const http = require('http');

const ID = Math.floor(Math.random() * 10000);
const startDate = new Date();

const CONFIG = {
  configFile: config.get('configFile'),
  secret: config.get('secret')
};

console.log(`Starting instance ID = ${ID}...`);

const server = http.createServer((req, res) => {
  const html = `
    <html>
      <body>
        <h2>Hello!</h2>
        <p>My ID: ${ID}</p>
        <p>Start time: ${startDate.toLocaleString()}</p>
        <p>Current time: ${new Date().toLocaleString()}</p>
        <p>Uptime: ${Number((Date.now() - startDate.valueOf()) / 1000)} sec</p>
        <p>Config:</p>
        <pre>${JSON.stringify(CONFIG, null, 2)}</pre>
      </body>
    </html>`;

  res.end(html);
});

server.listen(8000);

console.log('Server is listening at 8000');
