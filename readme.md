# Base para trabajar con SASS, ES6 y mucho más. 
[Laravel Mix](https://github.com/JeffreyWay/laravel-mix) nos permite trabajar con estás tecnologías y muchas más de manera simple y prácticamente sin configuración.

### Requisitos
Para trabajar con laravel mix, es necesario tener instalado [Node.js y NPM](https://nodejs.org/en/)
Puedes verificar si tienes instalado npm ejecutando este comando: 
```bash
npm -v
```
Lo que debiese retorar algo como `6.1.0`

## Instalación
Bajar el repositorio e instalar laravel mix usando npm 
```bash
git clone https://github.com/freshworkstudio/laravel-mix-base.git mi-proyecto
cd mi-proyecto
npm install
```
Eso es todo. De ahora en adelante, ya puedes compilar tus assets. 
Recuerda que `npm install` puede demorar bastante en terminar y arrojar algunas advertencias. Es normal, no te preocupes.

Luego, solo debes ejecutar este comando para compilar
```bash
npm run dev
```

### Watch (compilar automáticamente al guardar)
Para que laravel mix compile automáticamente cuando realizas un cambio en el SASS, puedes correr este comando: 
```bash
npm run watch
```

#### Estructura
Si te fijas, el archivo index.html está dentro de la carpeta `/public`. Te recomiendo que sigas esta misma estructura y pongas todos los HTML en esta carpeta. En cambio, todos los archivos fuentes (SASS, Javascript, etc) los coloques fuera de esta carpeta, en este caso dentro de `/src`

En el archivo `webpack.mix.js` está la configuración que le indica a Laravel mix que compilar y en donde. 

#### Recomenmdación GIT
Para usar esta carpeta como un nuevo repositorio, diferente a esta base, te recomiendo realizar este proceso: 
```bash
rm -fr .git
git init
```
De esta forma, eliminamos la información del repositorio que clonamos y creamos un nuevo repositorio donde puedes comenzar a trabajar desde cero con tus propios commits. 



