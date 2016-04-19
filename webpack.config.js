var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/scripts/example.js',
  output: {path: __dirname, filename: './public/scripts/bundle.js'},
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
