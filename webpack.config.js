let path = require('path');

let nodeExternals = require('webpack-node-externals');
let serverConfig = {
  target: 'node',
  externals: [nodeExternals()], //server side webpack ignoring bundles in /node_modules/
  entry: {
    server: './server/server.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'bundle')
  },
  module: {
    rules: [{
      test: /\.js/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  }
};

let webConfig = {
  target: 'web',
  entry: {
    webapp: './webapp/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'bundle')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    }]
  }
};

module.exports = [serverConfig, webConfig];