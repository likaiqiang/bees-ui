module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    if(process.env.NODE_ENV!=='development'){
      config.externals({
        'vue': 'Vue'
      })
    }
    // config
    //   .plugin('webpack-bundle-analyzer')
    //   .use(BundleAnalyzerPlugin)
    //   .init(Plugin => new Plugin());
  }
}