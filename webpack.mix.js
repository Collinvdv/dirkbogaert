let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
	.copy('resources/fonts', 'web/assets/fonts/')
	.copy('templates/icons', 'web/assets/icons/')
	.copy('resources/img', 'web/assets/img/')
	.sass('resources/scss/base.scss', 'web/assets/css/base.css');
	// .eslint()
	// .js('resources/js/main.js', 'web/assets/js/main.min.js');
