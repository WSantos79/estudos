module.exports = {
    entry: './JavaScript/Udemy/secao11/src/script.js',
    output: {
        path: __dirname + '/JavaScript/Udemy/secao11/public',
        filename: 'bundle.js', // fica no public
    },
    devServer: {
        contentBase: __dirname + '/JavaScript/Udemy/secao11/public',
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',                    
                }
            }
        ],
    }
};