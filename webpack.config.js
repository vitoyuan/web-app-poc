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
      test: /\.js$/,
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
    webapp: './webapp/app/index.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'webapp/bundle')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }
    }]
  }
};

module.exports = [serverConfig, webConfig];