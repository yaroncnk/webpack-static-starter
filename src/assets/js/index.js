// Compile css with webpack
require('../css/main.css');

// Watch markup
if (process.env.NODE_ENV !== 'production') {
  require('../../views/index.html');
}

require('./main');
