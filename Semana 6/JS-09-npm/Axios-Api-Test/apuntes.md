## Axios API
1. Revisar el sitio oficial de Axios "https://www.axios.com/"
2. Instalar axios desde npm con el comando 
    sh
npm install axios

3. Ejecutar el proyecto de react en el navegador con el comando 
    sh
npm run dev

## Manejando axios
1. En el archivo App.js, importar axios
    javascript
import axioss from 'axios'

2. Crear la función de tipo async-await para consumir una API
3. Indicamos el evento en línea para el primer botón, con el tipo de evento y la función a ejecutar
    javaScript
<button onClick={getUsers}>
4. Crear la función "postUser" de tipo async-await para enviar datos a una API
5. Indicamos el evento en línea para el segundo botón, con el tipo de evento y la función a ejecutar 
    javascript 
<button onClick={postUser}>