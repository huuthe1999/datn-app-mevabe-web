const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");
const CracoLessPlugin = require("craco-less");
const path = require("path");

module.exports = () => ({
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === "development"
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        : []),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#6C5CE7" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    plugins: [["import", { libraryName: "antd" }]],
  },
});
