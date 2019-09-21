const path = require('path');

console.log(path.join(__dirname,'public'));

module.exports = {
    mode: 'development',
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        //path:"C:\Users\Veronika\Anaconda3\react-course-projectc\indecision-app\public",
        filename:"bundle.js"
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: ['style-loader',
                   'css-loader',
                   'sass-loader']  
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
        contentBase:path.join(__dirname,'public'),
        historyApiFallback: true
    }
} ;