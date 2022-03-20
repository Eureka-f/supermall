const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //关闭ESlint
  // lintOnSave: false,

  //地址缩写配置
  configureWebpack: {
    resolve: {
      alias: {    
        'assets': '@/assets',  
        'common': '@/common',  
        'components': '@/components',         
        'views': '@/views',         
        'network': '@/network',  
      }
    }
  }
})
