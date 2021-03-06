var webpack =require('webpack');

module.exports ={
  entry:"./src/app.jsx",
  output:{
    path: __dirname + "/public/build/",
    publicPath:"build/",
    filename:"bundle.js"
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:"babel-loader",
        exclude:[/node_modules/,/public/]
      },
      {
        test:/\.css$/,
        loader:"style-loader!css-loader!autoprefixer-loader",
        exclude:[/node_modules/,/public/]
      },
      {
        test:/\.gif$/,
        loader:"url-loader?limit=10000&mimetype=image/gif",
      },
      {
        test:/\.jpg$/,
        loader:"url-loader?limit=10000&mimetype=image/jpg",
      },
      {
        test:/\.png$/,
        loader:"url-loader?limit=10000&mimetype=image/png",
      },
      {
        test:/\.svg/,
        loader:"url-loader?limit=26000&mimetype=image/svg+xml",
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        },
      },
      {
        test:/\.json$/,
        loader:"json-loader"
      },
    ]
  }
}