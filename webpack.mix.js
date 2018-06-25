let mix = require('laravel-mix');


mix
	//.js('src/js/app.js', 'public/js') // Toma lo que está en src/js/app.js, lo compila y el resultado quedará en la carpeta public/js/
	.sass('src/scss/app.scss', 'public/css'); // Toma el archivo SASSS (.scss) que está en src/scss/app.scss, lo compila y lo deja en public/css/app.css

