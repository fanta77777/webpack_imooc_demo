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
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader/useable',
                        options:{
                            insertInto:'#app'
                        }
                    },
                    {
                        loader:'css-loader'
                    }
                ]
            }
        ]
    }
};