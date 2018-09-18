import * as path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import * as webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
const config: webpack.Configuration = {
    mode: 'production',
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, "..", 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts','.js']
    },
    externals:[nodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'minify-lit-html-loader',
                    },
                    {
                        loader:'ts-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {}),
        new BundleAnalyzerPlugin()
    ]
}
module.exports = config