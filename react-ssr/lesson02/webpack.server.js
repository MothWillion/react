const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './server/index.js',
    externals: [nodeExternals()],  // 规避node层面有node_module代码
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-react',
                        [
                            '@babel/preset-env'  //支持最新js语法
                        ]
                    ]
                }
            }
        ]
    }
}