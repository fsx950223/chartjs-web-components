const path =require('path')
const VueLoaderPlugin =require('vue-loader/lib/plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
//const * as webpack from 'webpack'
// function resolve(dir) {
//     return path.join(__dirname, "..", dir);
// }
const config={
    mode: 'production',
    entry: './index.ts',
    output:{
        path: path.resolve(__dirname,"..",'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js','.vue' ]
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: 'ts-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new CleanWebpackPlugin('dist', {} )
    ]
}
module.exports=config