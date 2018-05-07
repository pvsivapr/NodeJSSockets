var app = require('./app'); // this is your express app
var http = require('http'); // 3. HTTP server

/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT; // 2. Using process.env.PORT
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);