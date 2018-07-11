const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const SpritePlugin = require('svg-sprite-loader/plugin');

module.exports = {
    module: {
        rules: [
            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [
                    'file-loader?name=img/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug'
                ]
            },
            {
                test: /\.pug$/i,
                use: [{
                    loader: 'pug-loader',
                    options: {
                        pretty: true,
                        self: true
                    }
                }]
            },
            // SASS
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            // FONTS E SVG
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: { 
                    extract: true 
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.pug",
            filename: "./index.html",
        }),
        
        new HtmlWebPackPlugin({
            template: "./src/interna.pug",
            filename: "./interna.html",
        }),
        
        new HtmlWebPackPlugin({
            template: "./src/cadastro.pug",
            filename: "./cadastro.html",
        }),
        
        new HtmlWebPackPlugin({
            template: "./src/meus-planos.pug",
            filename: "./meus-planos.html",
        }),
        
        new HtmlWebPackPlugin({
            template: "./src/configuracoes.pug",
            filename: "./configuracoes.html",
        }),
        
        new HtmlWebPackPlugin({
            template: "./src/adesoes.pug",
            filename: "./adesoes.html",
        }),
        
        new HtmlWebPackPlugin({
            template: "./src/dependentes.pug",
            filename: "./dependentes.html",
        }),
        
        new HtmlWebPackPlugin({
            template: "./src/produtos.pug",
            filename: "./produtos.html",
        }),

        new SpritePlugin({
            plainSprite: true
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
            // Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
            // Popper: ['popper.js', 'default'],
            // Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
            // Button: 'exports-loader?Button!bootstrap/js/dist/button',
            // Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
            // Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
            // Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
            // Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
            // Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
            // Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            // Util: 'exports-loader?Util!bootstrap/js/dist/util'
        }),
    ]
};