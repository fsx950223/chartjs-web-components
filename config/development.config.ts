import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as fs from 'fs'
const banner=fs.readFileSync(path.resolve(__dirname, '..', 'LICENSE')).toString()
interface Configuration extends webpack.Configuration {
    devServer: any;
}
const config: Configuration = {
    mode: 'development',
    entry: {
        web: './demo/demo.ts',
        react: './demo/react-demo.tsx',
        vue: './demo/vue-demo.ts'
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    },
    plugins: [
        new webpack.BannerPlugin(banner),
        new HtmlWebpackPlugin({
            title: 'Demo',
            filename: 'index.html',
            template: './demo/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        index: 'index.html',
        compress: true,
        port: 9000
    }
};
module.exports = config;
