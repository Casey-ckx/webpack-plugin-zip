const path = require('path');
const ZipPlugin = require('./plugins/zip-plugins');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      new ZipPlugin({
          filename: 'offline'
        }
      )
  ]
};