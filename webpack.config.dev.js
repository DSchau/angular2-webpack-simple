const webpack = require('webpack');

process.env.NODE_ENV = 'development';

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  noInfo: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify('development')
    })
  ]
};
