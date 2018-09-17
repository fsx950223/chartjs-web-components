//import * as path from 'path'
//import VueLoaderPlugin from 'vue-loader/lib/plugin'
//import * as webpack from 'webpack'
//import HtmlWebpackPlugin from 'html-webpack-plugin'
// interface Configuration extends webpack.Configuration{
//     devServer:any;
// }
const path =require('path')
const VueLoaderPlugin =require('vue-loader/lib/plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const config ={
    mode:'development',
    entry: {
        index:'./index.ts',
        web:'./demo/demo.ts',
        react:'./demo/react-demo.tsx'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js','.vue' ]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Demo',
            filename: 'index.html',
            template: './demo/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        index:'index.html',
        compress: true,
        port: 9000
    }
}
module.exports=config