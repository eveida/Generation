# Crear y publicar un nuevo paquete de npm

## Creación del paquete
1. Inicializar npm desde CLI
    sh 
npm init -y     >>> el -y nos permite agregar todas las características por default (yes)
npm init

Me guiará a través de una serie de pasos donde me solicite información relacionada con mi package, como el nombre(nombre unico), versión, descripción, punto de entrada (index.js), comando de prueba, repositorio de git donde vive, palabras clave, autor.

2. Presionar ENTER para aceptar que la información es correcta y generar el archivo json. 
> - El package .json 
   Contienen información sobre el proyecto-módulo que vamos a crear. Son un estándar de nodejs para facilitar la estructura de ejecución de los proyectos dentro del entorno de ejecucuión y de esta manera poder compartirlo a través del sitio (https;//www.npmjs.com)
   La información se estructura como objeto de JS con notación JSON. 

3. Crear una carpeta llamada 'modules'
4. Dentro de 'modules' crear el scridt (.js) con el combre 'parimpar.js'
5. Crear la función del script y exportarlo con 'export default'
6. Importar el scrit desde el archivo 'index.js' con 'import + function + form + ruta' e invocamos la función parámetro
7. Configurar ek "type: module" en el archivo 'package.json'
8. Ejecutamos el programa desde el entorno de nodejs con el comando 
    sh
node index.js

## Publicar package en npm
1. Iniciar sesión de npm pero ahora desde CLI con el comando
sh
npm login
2. Esperamos que cargue y presionamos enter para abrir el navegador
3. Recibiremos un correo con un password de una sola vez, lo agregamos y presionamos Login
4. Regresamos a la terminal y nos mostrará el mensaje 'logged in on npmjs.org'
5. Publicar el package con acceso publico desde CLI a npm con el comando. 
    sh 
npm publish --access=public