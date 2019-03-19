module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    if(process.env.NODE_ENV!=='development'){
      config.externals({
        'vue': 'Vue'
      })
    }
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = false
        return options
      })
  }
}