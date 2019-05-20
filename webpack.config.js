const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/app.js",
    footer: "./src/footer.module.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.pug/,
        use: 'pug-loader'
      },
      {
        test: /\.styl/,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: "file-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/layout.pug'
    })
  ]
};