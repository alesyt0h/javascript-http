import './styles.css';
import { init as initChistes } from './js/chistes-page'
import { init as initListaUsuarios} from './js/usuarios-page'
import * as CRUD from './js/crud-provider'
import { init } from './js/archivos-page'


// Cloudinary
init();

// Chistes
initChistes();

// Usuarios
initListaUsuarios();

CRUD.getUsuario(1).then(console.log);

CRUD.crearUsuario({
    name: 'Alejandro',
    job: 'King'
}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'Melissa',
    job: 'Enfermera'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log);