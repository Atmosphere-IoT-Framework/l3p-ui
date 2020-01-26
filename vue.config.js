var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  configureWebpack :{
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })], 
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:8084/v1'  
        })
    } 
  }
}
