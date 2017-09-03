const express = require('express');
const history = require('connect-history-api-fallback')
const server = express();
const staticFileMiddleware = express.static('dist');
server.use(staticFileMiddleware);
server.use(history({
  disableDotRule: true,
  verbose: true
}));
server.use(staticFileMiddleware);
server.listen(process.env.PORT || 5000);
