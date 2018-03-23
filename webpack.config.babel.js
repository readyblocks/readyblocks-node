import path from 'path'

export default {
  entry: {
    module: path.resolve(__dirname, 'lib', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'lib')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env',
                  {
                    targets: {
                      node: 'current'
                    }
                  }
                ]
              ],
              plugins: [
                'transform-runtime',
                'transform-async-to-generator'
              ]
            }
          }
        ]
      }
    ]
  }
}