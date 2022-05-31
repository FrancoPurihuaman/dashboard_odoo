const path = require('path');

module.exports = {
  entry: {
    dashboard: path.resolve(__dirname, './resources/js/dashboard.js')
    //access: path.resolve(__dirname, './resources/js/access.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './public/'),
    filename: 'js/[name].js'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: { 
              sourceMap: false
            },
          },
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
};
