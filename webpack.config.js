const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => ({
  entry: ["./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./public/favicon.png" },
        { from: "./public/index.html" },
        { from: "./public/CNAME" },
        { from: "./public/.nojekyll" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|woff|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8080
  },
});
