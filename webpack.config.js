let path = require('path');

let serverConfig = {
  target: 'node',
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
    }]
  }
};

let clientConfig = {
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

module.exports = [serverConfig, clientConfig];