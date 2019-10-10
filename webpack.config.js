var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.HtmlPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html"
    // }),
    new webpack.DefinePlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};