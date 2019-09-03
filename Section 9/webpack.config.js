const path = require('path'); // built in node module
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    //where it will start looking (entry point)
    entry:['babel-polyfill','./src/js/index.js'],

    // where to save our bundle file
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    }, 

    devServer: {
        contentBase: './dist'
    },

    // put mode in package.json
    // mode: 'development' // make things fast as possible

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            //starting html file
            template: './src/index.html'
        })
    ], 
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}