const corsProxy = require('cors-anywhere');

corsProxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(8000, () => {
  console.log('Running CORS Anywhere on port 8000');
});
