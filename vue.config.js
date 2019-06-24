const webpack = require('webpack')
const path = require('path')

const openPort = 9423
module.exports = {
  pages: {
    page1: {
      entry: 'src/pages/page1/main.js',
      template: 'public/index.html',
      filename: 'page1.html',
      title: '页面1'
    },
    page2: {
      entry: 'src/pages/page2/main.js',
      template: 'public/index.html',
      filename: 'page2.html',
      title: '页面2'
    }
  },
  devServer: {
    port: openPort
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        // 服务器地址
        SERVER_ADDRESS:
          process.env.NODE_ENV === 'production'
            ? JSON.stringify('线上服务器地址')
            : JSON.stringify(`http://localhost:${openPort}`)
      })
    ]
  }
}
