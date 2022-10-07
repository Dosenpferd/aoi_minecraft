const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: ["scss/style", "js/app"],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "public/",
    filename: "js/app.js"
  },
  resolve: {
    modules: ["./private"],
    extensions: [".js", ".css", ".scss"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
  ],
  watchOptions: {
    ignored: ["**/node_modules"]
  }
};