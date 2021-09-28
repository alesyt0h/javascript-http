# Peticiones HTTP

<h3 align="center">Preview</h3>
<p align="center">
  <img src="https://github.com/alesyt0h/javascript-http/blob/main/Preview%20Peticiones.jpg?raw=true" style="width:630px" alt="Peticiones HTTP - Preview"/>
</p>

* **Fetch**:
```javascript
//GET
const resp = await fetch(url);

//POST, PUT, DELETE.. 
const resp = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type': 'application/json',
        'token': 'ABC123'
    }
}

// Response has to be converted to JSON
const data = await resp.json();
```
* **Init**: Creación de una funcion que es la unica que exportamos, con todas las llamadas a las funciones que necesitaremos de ese archivo.
* Importación multiple para poder usar dicho objeto con todos sus propiedades y métodos: `import * as CRUD from './js/crud-provider'`
* Importación de archivos con renombramiento: `import { init as initChistes } from './js/chistes-page'`
* Desestructuración con renombramiento: `const {data: usuarios}`
* CRUD
* Creación de elementos y añadirlos al DOM
```javascript
const usuarios = await obtenerUsuarios();
usuarios.forEach(crearFilaUsuario)

// Same as 
(await obtenerUsuarios()).forEach(crearFilaUsuario);
```
* Uso de **Cloudinary**
* Subida de archivos
* **HTML Input**: El archivo esta en `event.target.files[0]`
* **FormData**: Hay que crear una instancia de `FormData()` Para poder enviar archivos, también se pueden enviar otros datos. Hay que incluirlo en el body de la petición.
```javascript
const formData = new FormData();

formData.append('token','mjwwxtce');
formData.append('file', archivoSubir);
```
