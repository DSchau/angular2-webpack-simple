const webpack = require('webpack');
const path = require('path');

const pkg = require(path.resolve('./package.json'));

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    polyfills: './src/polyfills',
    vendor: './src/vendor',
    app: './src/'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, 'src'),
        exclude: [
          /node_modules/
        ],
        loaders: ['awesome-typescript', 'angular2-template']
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src'),
        loaders: ['raw']
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        loaders: ['to-string-loader', 'css']
      },
      {
        test: /\.json$/,
        include: [
          path.resolve(__dirname, 'src'),
          /node_modules/ // this should not be required; investigate
        ],
        loaders: ['json']
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        include: path.join(__dirname, 'src'),
        loaders: ['url'],
        query: {
          limit: 10000
        }
      }
    ],
    noParse: [
      /.+zone\.js\/dist\/.+/,
      /.+angular2\/bundles\/.+/,
      /angular2-polyfills\.js/
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills'],
      minChunks: Infinity,
    })
  ],
  resolve: {
    extensions: ['', '.', '.js', '.ts']
  }
};
