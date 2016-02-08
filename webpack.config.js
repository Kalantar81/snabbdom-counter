var path = require('path');
module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
           {
				loader: 'babel-loader',
                test: path.join(__dirname, 'app'),
                query: {
                  presets: 'es2015'
                }
			}
        ]
    },
   devtool: 'source-map'
}