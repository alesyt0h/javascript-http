const jokeUrl  = 'https://api.chucknorris.io/jokes/random'
const usersUrl = 'https://reqres.in/api/users?page=2'

// Cloudinary
const cloudPreset = 'mjwwxtce';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/dzmodzivd/upload';


// fetch(jokeUrl).then( resp => {
//     resp.json().then( ({id, value}) => {
//         console.log(id);
//         console.log(value);
//     })
// });

// fetch(jokeUrl)
//     // .then(resp => {
//     //     return resp.json()
//     // })
//     .then(resp => resp.json()) // Lo mismo al código de arriba
//     .then(({id, value}) => {
//         console.log(id,value);
//     })

const obtenerChiste = async() => {

    try {

        const resp = await fetch(jokeUrl);
    
        if (!resp.ok) throw 'No se pudo realizar la petición';
    
        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value }

    } catch (error) {
        throw error;
    }

};

const obtenerUsuarios = async() => {

    const resp = await fetch(usersUrl);
    const {data: usuarios} = await resp.json();

    return usuarios;
    
}

const subirImagen = async(archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset','mjwwxtce');
    formData.append('file', archivoSubir);

    try {
        
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok){
            const cloudResp = await resp.json();
            return await cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }
}


export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}