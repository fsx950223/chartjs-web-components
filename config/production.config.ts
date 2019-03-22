import CleanWebpackPlugin from 'clean-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
//import CompressionPlugin from 'compression-webpack-plugin';
import * as fs from 'fs'
const banner=fs.readFileSync(path.resolve(__dirname, '..', 'LICENSE')).toString()
const config: webpack.Configuration = {
    mode: 'production',
    entry: {base: './src/base.ts', react: './src/react.tsx', vue: './src/vue.ts'},
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: `[name].js`
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    externals: ['chart.js','vue','react'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'minify-lit-html-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin(banner),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        //new CompressionPlugin()
    ]
};
module.exports = config;
