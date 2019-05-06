let mix = require('laravel-mix');
require('@stakahashi/laravel-mix-stylelint');
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
	.stylelint()
	.sass('resources/scss/base.scss', 'web/assets/css/base.css');
