var config = {
   entry: './component/ts/root.tsx',
   output: {
      filename: './output/bundle.js',
   },
   devServer: {
      inline: true,
      port: 8888,
   },
   node: {
	  fs: "empty",
	  net: "empty",
	  tls: "empty"
  },
  devtool: "#eval-source-map",
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
		 {
			test: /\.scss$/,
			use: [
			{loader: "style-loader"},
			{loader: "css-loader" },
			{loader: "sass-loader"}]
		 },
		 {
			test: /\.tsx$/,
            exclude: /node_modules/,
            loader: 'ts-loader',

		 }
      ]
   }
}
module.exports = config;
