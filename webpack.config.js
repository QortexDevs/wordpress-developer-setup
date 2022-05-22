const path = require('path')

const projectName = process.env.PLUGIN_NAME || process.env.THEME_NAME

if (!projectName) {
	throw new Error('Set PLUGIN_NAME or THEME_NAME environment variable')
}

let projectDirectory
if (process.env.PLUGIN_NAME) {
	projectDirectory = 'plugins'
} else if (process.env.PLUGIN_NAME) {
	projectDirectory = 'themes'
}

const defaultPath = path.resolve(
	__dirname,
	projectDirectory,
	projectName,
	'assets'
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
