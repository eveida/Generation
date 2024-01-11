# React Router
### Instalación
Ejecutar el comando patra instaler el router
``` sh
npm install react-router-dom
```

### Implementación 
1. Importamos React Router en el archivo `main.jsx` para que se encuentre disponible en cualquier parte de la aplicación. 
Para ello, importamos el componente 
    `{BrowserRouter} from 'react-router-dom' `
2. Modificar el componente `<App />` y envolverlo con los componente `<BrowserRouter > </ BrowserRouter>`
``` javascript 
import {BrowserRouter} from 'react-router-dom'
<BrowserRouter>
    <App />
</BrowserRouter>
```
3. Crear componentes 'Inicio.jsx', 'SobreNosotros.jsx', 'Contacto.jsx'
4. Necesitamos importar las funcionalidades que emplearemos `Route` y `Routes` dentro del archivo `App.jsx`
```javascript 
import { Routes, Route } from 'react-router-dom' ```

5. Modificamos `App.jsx` para implementar Routes y Route
6. Para evitae etiquetas de anclaje <a></a> vamos a ocuoar una funcionalidad de react rouer llamada `{link}`