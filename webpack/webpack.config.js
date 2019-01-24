const path = require('path');
const webpack = require('webpack');
const htmlplugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    mode:'development',
    entry:{
        index:"./src/index.js"

    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
        
        
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlplugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        })
    ],

    devServer:{
        contentBase: path.resolve(__dirname,'dist'),

        host:'localhost',

        compress:true,

        port:8081,

        compress:true,

        open:true,

        hot:true
    }

}