# Base para trabajar con SASS, ES6 y mucho más. 
[Laravel Mix](https://github.com/JeffreyWay/laravel-mix) nos permite trabajar con estás tecnologías y muchas más de manera simple y prácticamente sin configuración.

### Requisitos
Para trabajar con laravel mix, es necesario tener instalado [Node.js y NPM](https://nodejs.org/en/)

### Instalación
Bajar el repositorio e instalar laravel mix usando npm 
```bash
git clone git@github.com:freshworkstudio/laravel-mix-base.git mi-proyecto
cd mi-proyecto
npm install
```
Luego, solo debes ejecutar este comando para compilar
```bash

npm run dev
```

#### Watch
Para que laravel mix compile automáticamente cuando realizas un cambio en el SASS, puedes correr este comando: 
```bash
npm run watch
```

### Estructura
Si te fijas, el archivo index.html está dentro de la carpeta `/public`. Te recomiendo que sigas esta misma estructura y pongas todos los HTML en esta carpeta. En cambio, todos los archivos fuentes (SASS, Javascript, etc) los coloques fuera de esta carpeta, en este caso dentro de `/src`

