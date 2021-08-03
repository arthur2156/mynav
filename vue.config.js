module.exports = {
	devServer: {
		port: 99,
		open: true,
		proxy: {
			'/dog': {
				target: 'http://api.apishop.net',
				pathRewrite: {
					'^/dog': 'http://api.apishop.net'
				}
			},
			'/wen': {
				target: 'https://api.jisuapi.com',
				pathRewrite: {
					'^/wen': 'https://api.jisuapi.com'
				}
			},
		}

	},
	// 取消空格报错
	lintOnSave: false,
}
