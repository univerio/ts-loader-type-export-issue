module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: "debug-loader",
        },{
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        }],
      },
    ],
  },
};
