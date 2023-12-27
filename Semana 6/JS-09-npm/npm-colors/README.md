# Pasos para iniciar el proyecto colors
1. Crear una carpeta llamada colors
2.  Crear un archivo 'main.js'

# npm desde CLI
3. Iniciamos un proyecto desde npm con el comando 
  sh
npm init -y
4. Buscamos el package colors y lo instalamos con el comando 
  sh 
npm i colors

5. Dentro del archivo 'main.js' camos a importar el paquete colors con la línea de código 
  javascript 
const colors = require('colors');

6. Implementar las funciones de colors en el main.js (estilos para el texto de la terminal). Para ello, hay que consultar la documentación oficial de colors en [https://npmjs.com]

7. Para ejecutar el package utilizamos el comando 
  sh 
node archivo.js
8. Como eliminar (desintalar) módulos de  npm 
  sh
npm uninstall colors