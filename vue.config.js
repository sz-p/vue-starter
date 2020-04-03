// 进度条插件
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');
// 打包后文件大小分析插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let plugins = [];
if (process.env.NODE_ENV === 'production') {
  plugins.push(new SimpleProgressPlugin());
  plugins.push(new BundleAnalyzerPlugin());
}
module.exports = {
  configureWebpack: {
    plugins,
    module: {
      rules: [
        {
          test: /\.scss$/,
          loaders: ['vue-style-loader', 'css-loader', 'sass-loader'],
        },
      ]
    }
  },

}