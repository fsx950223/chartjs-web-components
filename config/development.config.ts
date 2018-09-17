import * as path from 'path'
//import VueLoaderPlugin from 'vue-loader/lib/plugin'
import * as webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
//import HtmlWebpackPlugin from 'html-webpack-plugin'
interface Configuration extends webpack.Configuration{
    devServer:any;
}
//const path =require('path')
//const HtmlWebpackPlugin=require('html-webpack-plugin')
const config:Configuration ={
    mode:'development',
    entry: {
        web:'./demo/demo.ts',
        react:'./demo/react-demo.tsx',
        vue:'./demo/vue-demo.ts'
    },
    output:{
        path: path.resolve(__dirname,'..', 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js','.vue' ]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' },
        ]
    },
    plugins:[
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