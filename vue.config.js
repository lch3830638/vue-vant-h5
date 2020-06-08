const path = require('path')
const apiMocker = require('mocker-api')
const customTheme = require('./customTheme')

const openPort = 9423
module.exports = {
  pages: {
    page1: {
      entry: 'src/pages/page1/main.js',
      template: 'public/index.html',
      filename: 'page1.html',
      title: '页面1',
    },
    page2: {
      entry: 'src/pages/page2/main.js',
      template: 'public/index.html',
      filename: 'page2.html',
      title: '页面2',
    },
  },
  devServer: {
    port: openPort,
    index: 'page1.html',
    before: app => {
      apiMocker(app, path.resolve('./mock/index.js'))
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8010',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: customTheme,
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        root: __dirname,
      },
    },
  },
}
