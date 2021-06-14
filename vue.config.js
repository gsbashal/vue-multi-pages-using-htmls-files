'use strict'

const config = {
  devServer: {
      open: true,
      disableHostCheck: true,
      historyApiFallback: {
        rewrites: [
          { from: /\/index/, to: '/index.html' },
          { from: /\/home/, to: '/home.html' },
          { from: /\/login/, to: '/login.html' }
        ]
      }
  },
  pages: {
      index: {
          entry: 'src/pages/index/app.js',
          template: 'public/index.html',
          filename: 'index.html',
      },
      home: {
        entry: 'src/pages/customer/home/app.js',
        template: 'public/home.html',
        filename: 'home.html',
       },
       home1: {
        entry: 'src/pages/customer/home/app.js',
        template: 'public/home1.html',
        filename: 'home1.html',
       },
       login: {
        entry: 'src/pages/user/login/app.js',
        template: 'public/login.html',
        filename: 'login.html',
       },
       login1: {
        entry: 'src/pages/user/login/app.js',
        template: 'public/login1.html',
        filename: 'login1.html',
       }
     
  },
  // ...config code
}
module.exports = config