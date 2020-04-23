module.exports = {
  publicPath: './',
  assetsDir: './assets',
  devServer: {
    // https: true,   //开启本地Https模式
    // string | Object 代理设置
    proxy: {
      // 接口是 '/api' 开头的才用代理
      "/api": {
        target: 'http://localhost:7001', // 目标地址
        changeOrigin: true, // 是否改变源地址
        pathRewrite: { '^/api': '' }
      }
    }
  }
}