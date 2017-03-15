const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/mobile.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');

mix.browserSync({
    proxy: '119.29.153.150:8080',
    host: "119.29.153.150",
    open: false //服务器端开发 不打开浏览器
});
//

mix.options({
    uglify: {sourceMap: false}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
});

