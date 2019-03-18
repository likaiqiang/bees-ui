module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.externals({
      'vue': 'Vue'
    })
    // config
    //   .plugin('webpack-bundle-analyzer')
    //   .use(BundleAnalyzerPlugin)
    //   .init(Plugin => new Plugin());
  }
}