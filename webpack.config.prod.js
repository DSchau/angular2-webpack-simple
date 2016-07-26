const webpack = require('webpack');

const WebpackMd5Hash = require('webpack-md5-hash');

process.env.NODE_ENV = 'production';

module.exports = {
  output: {
    chunkFilename: '[chunkhash].[id].chunk.js',
    filename: '[name].[hash].js',
    publicPath: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify('production')
    }),
    new WebpackMd5Hash(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
