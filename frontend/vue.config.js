const { defineConfig } = require('@vue/cli-service')
const path = require('path');
// module.exports = defineConfig({
//   transpileDependencies: true
// });

module.exports = {
  outputDir: path.resolve(__dirname, 'dist'),
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8001'
      }
    }
  }
}
