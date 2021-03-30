// {
//   const chalk = require('chalk');
//   console.log(chalk.redBright('current env: ', process.env.NODE_ENV));
// }

const plugins = require('./webpack.plugins');
const rules = require('./webpack.module.rules');

module.exports = {
  productionSourceMap: false,
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: '@import "@/styles/theme.scss";'
  //     }
  //   }
  // },
  configureWebpack: {
    // mode: 'production',
    // mode: 'development',
    // optimization: {
    //   // usedExports: true,
    //   splitChunks: {
    //     cacheGroups: {
    //       elementUI: {
    //         name: 'chunk-elementUI', // split elementUI into a single package
    //         priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
    //         test: /[\\/]node_modules[\\/]element-ui[\\/]/,
    //         chunks: 'all',
    //       },
    //       echarts: {
    //         name: 'chunk-echarts',
    //         priority: 20,
    //         test: /[\\/]node_modules[\\/]echarts[\\/]/,
    //         chunks: 'all',
    //       },
    //       xlsx: {
    //         name: 'chunk-xlsx',
    //         priority: 20,
    //         test: /[\\/]node_modules[\\/]xlsx[\\/]/,
    //         chunks: 'all',
    //       },
    //     }
    //   },
    // },
    plugins,
    module: {
      // exprContextCritical: false, // https://blog.gaoqixhb.com/p/581ab5b9f143f9631c26d039
      rules
    },
  }
};
