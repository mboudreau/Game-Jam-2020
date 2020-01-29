const path = require("path");
const phaserPath = require.resolve("phaser/dist/phaser.js");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distDir = path.resolve(__dirname, "dist");

module.exports = {
    entry: "./src/game.ts",
    output: {
        path: distDir,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: "ts-loader", exclude: "/node_modules/"},
            {test: /\.css$/, loader: "css-loader"},
            {test: /phaser\.js$/, loader: "expose-loader?Phaser"},
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: distDir,
        publicPath: "/",
        host: "0.0.0.0",
        port: 8080
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            phaser: phaserPath
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Game Jam 2020",
            template: "src/index.html"
        })
    ]
};
