const path = require('path')

const pluginName = process.env.PLUGIN_NAME
if (!pluginName) {
  throw new Error('Set PLUGIN_NAME environment variable')
}

const defaultPath = path.resolve(
  __dirname,
  'plugins/' + pluginName + '/assets'
)

module.exports = {
  output: {
    path: process.env.WEBPACK_OUTPUT_PATH ?? defaultPath
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
}
