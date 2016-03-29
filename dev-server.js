const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const webpack = require('webpack');
const isDeveloping = process.env.NODE_ENV !== 'production';

if (isDeveloping) {
  const webpackConfig = require('./webpack.config.development.js');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}
// Serve assets
app.use(express.static('dist'));

app.listen(port, () => {
  /*eslint-disable */
  console.log('Listening on port', port);
  /*eslint-enable */
});
