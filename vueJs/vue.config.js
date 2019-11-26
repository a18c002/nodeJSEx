module.exports = {
  // chainWebpack: config => {
  //   config.externals({
  //     'CKEDITOR': 'window.CKEDITOR' //window掛載
  //   })
  // },  
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        prependData: `@import "@/assets/sass/main.sass"`
      }
    }
  },
  // devServer: { //本機開發跨域代理
  //   proxy: {
  //     '/house': {
  //       target: 'https://local.amber.com.tw/ajax/ajax.asmx',
  //       pathRewrite: { '^/house': '' },
  //       changeOrigin: true,
  //       secure: true
  //     },
  //     '/localmvc': {
  //       target: 'https://local.amber.com.tw/mvc/api',
  //       pathRewrite: { '^/localmvc': '' },
  //       changeOrigin: true,
  //       secure: true
  //     },
  //     '/knamvc': {
  //       target: 'https://local.amber.com.tw/KingNetApiMvc/',
  //       pathRewrite: { '^/knamvc': '' },
  //       changeOrigin: true,
  //       secure: true
  //     },
  //     '/guest': {
  //       target: 'https://local.amber.com.tw/mvc/Guest',
  //       pathRewrite: { '^/guest': '' },
  //       changeOrigin: true,
  //       secure: true
  //     },
  //   }
  // },
};