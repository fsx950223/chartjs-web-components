import * as path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import * as webpack from 'webpack'
const config:webpack.Configuration = {
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
        new CleanWebpackPlugin('dist', {}),
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            threshold: 10240,
            minRatio: 0.8
        }),
        new BundleAnalyzerPlugin()
    ]
}
module.exports = config