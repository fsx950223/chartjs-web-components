const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//const * as webpack from 'webpack'
const config = {
    mode: 'production',
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, "..", 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue']
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
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin('dist', {}),
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        }),
        new BundleAnalyzerPlugin()
    ]
}
module.exports = config