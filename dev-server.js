const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// Serve assets
app.use(express.static('dist'));

app.listen(port, () => {
  /*eslint-disable */
  console.log('Listening on port', port);
  /*eslint-enable */
});
