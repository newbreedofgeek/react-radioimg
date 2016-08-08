var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
      './src/examples/App.js'
  ],
  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },
  cache: true,
  debug: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=1000'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
