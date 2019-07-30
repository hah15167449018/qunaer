// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: 'qunar',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
  }
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8080/',
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''//请求的时候使用这个api就可以
  //       }
  //     }
  //   }
  // }
}