let path = require('path');

module.exports = {
  entry: {
    server: './server/server.js',
    app: './webapp/index.js'
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
  },
  target: 'async-node',
  node: {
    __filename: true,
    __dirname: true
  }
};