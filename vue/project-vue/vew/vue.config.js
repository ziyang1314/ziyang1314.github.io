let path = require('path');
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname,'./src/style/variable.scss'),
        path.resolve(__dirname,'./src/style/elementui-variables.scss')
      ]
    }
  }
}
