var gulp = require('gulp'),
	webpack = require('webpack'),
	gulpWebpack = require('gulp-webpack'),
	BowerWebpackPlugin = require('bower-webpack-plugin');

var config = {
	watch: true,
	output: {
		filename: 'app.js'
	},
	module:  {
		loaders: [
			{
				test:   /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	plugins: [
		new BowerWebpackPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
};

gulp.task('webpack', function() {
	gulp.src('app.js')
		.pipe(gulpWebpack(config))
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', ['webpack']);