const path = require('path');

module.exports = {
    entry: {
        app:'./src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    {
                        loader:'style-loader',
                        options:{
                            insertInto:'#app',
                            singleton:true,
                            transform:'./css.transform.js'
                        }
                    },
                    {
                        loader:'css-loader',
                        options:{
                            modules:true,
                            localIdentName:'[path][name]+[local]-[hash:base64:5]'
                        }
                    },
                    {
                        loader:'less-loader'
                    }
                ]
            },
            {
                test:/\.less$/,

            }
        ]
    }
};