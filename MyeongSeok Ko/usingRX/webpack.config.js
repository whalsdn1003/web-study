const path = require('path');

module.exports = {
    mode : 'development',
    entry : ["@babel/polyfill", "./index.js"],
    output : {
        path : path.resolve(__dirname + "dist"), // 현 위치에 dist 디렉토리에 위치
        filename : "webpack.bundle.js" // 번들링 된 파일 이름
    },
    module : {
        rules : [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test:/\.(s*)css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
}