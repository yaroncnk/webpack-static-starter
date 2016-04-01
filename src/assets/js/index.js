// Compile css with webpack
require('../scss/main.scss');

// Watch markup
if (process.env.NODE_ENV !== 'production') {
  require('../../views/index.html');
}

require('./main');
