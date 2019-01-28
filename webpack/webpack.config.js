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
        filename:"[name].js",
        publicPath:"http://127.0.0.1:8081/"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {test:/\.(png|jpg|gif)$/,
                use:[{
                loader:'url-loader',
                option:{
                    limit:500,
                    outputpath:'./img/'
                }
            }]
        },{
            test:/\.(html|htm)/i,
            loader:'html-withing-loader'
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
        }),
        new ExtractTextPlugin("./css/main.css"),
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