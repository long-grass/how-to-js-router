const path = require('path')

module.exports = options => {
  return {
    entry: './src/js/index.js',
    output: {
      path: path.join(__dirname, '../', '/dist'),
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets:[ 'stage-2' ]
          }
        }
      ]
    }
  }
} 
