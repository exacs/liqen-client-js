const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'liqen-api-client.js',
    library: 'liqenClient',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules'
    ],

    extensions: ['.js', '.json', '.jsx']
  },

  context: __dirname
}
