module.exports = {
  publicPath: '/',
  outputDir: process.env.OUTPUT_DIR,
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views',
        utils: '@/utils',
        api: '@/api',
        store: '@/store'
      }
    }
  }
}
