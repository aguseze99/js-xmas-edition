const form = document.querySelector('#carta-a-santa')


const nombre = form.nombre.value // const nombre = document.querySelector('[name = nombre']).value
const ciudad = form.ciudad.value// const ciudad = document.querySelecto('[name = ciudad']).value
const comportamiento = form.comportamiento.value// const comportamiento = document.querySelector('[name = comportamiento]')
const descripcionRegalo = form['descripcion-regalo'].value//const descripcionRegalo = document.queySelector('[name = descripcion-regalo]')



console.log(nombre)
console.log(ciudad)
console.log(comportamiento)
console.log(descripcionRegalo)

function validacionNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter'
    }
    if(nombre.length > 50){
        return 'Este campo debe tener menos de 50 caracteres'
    }
    return 
}

validacionNombre(nombre);

function validacionCiudad(ciudad){
    if(ciudad.value === null || ciudad.value === undefined || ciudad.value === ''){
        return 'Seleccione 1 opción'
    }else {
        return 'validación exitosa'
    }
    
}
validacionCiudad(ciudad)

function validacionComportamiento(comportamiento){
    if(comportamiento.value === null || comportamiento.value === undefined || comportamiento.value === ''){
        return 'Seleccione 1 opción'
    } else {
        return `validación exitosa `
    }
}
validacionComportamiento(comportamiento)

function validacionDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0 ){
        return 'Tenes que escribir que es lo que queres este año de regalo'
    }
    if(descripcionRegalo.length > 150){
        'Este campo puede tener hasta 150 caracteres'
    }
    return

}
validacionDescripcionRegalo(descripcionRegalo)

function validarFormulario(e){
    const form = document.querySelector('#carta-a-santa');
    const nombre = form.nombre.value
    const ciudad = form.ciudad.value
    
    const descripcionRegalo = form ['descripcion-regalo'].value
    
    const errorNombre = validacionNombre(nombre)
    const errorCiudad= validacionCiudad(ciudad)
    const errorDescripcionRegalo = validacionDescripcionRegalo(descripcionRegalo)
    
    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }
    console.log(errores)

    const esExito = manejarErrores(errores) === 0;
    if(esExito){
        form.className = 'oculto'
        document.querySelector('#exito').className = '';
    }
    // Ahora, qué pasa si todo fue bien?
   
//   1. Vamos a esconder el formulario
//   2. Vamos a mostrar el elemento con id `#exito` //explicar esta técnica
  
// TAREA:
//   3. En 5 segundos vamos redireccionar al usuario a `wishlist.html`,
//   usando `setTimeout` y `window.location.href`.

    e.preventDefault
}

function manejarErrores(errores){
    const keys = Object.keys(errores);
    console.log(keys)
    const $errores = document.querySelector('#errores')
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key]


        if(error){
            cantidadErrores++;
            form[key].className = 'error'

            const $error =  document.createElement('li')
            $errores.innerText = $error;

            $errores.appendChild($error)
            
        }else{
            //Borrar el campo adecuado, para que no se queden los errores siempre en el formulario
            form[key].className = ''
        }
        return cantidadErrores;
    })
    // errorNombre = errores.nombre;
    // errorCiudad = errores.ciudad;
    // errorDescripcionRegalo = errores.descripcionRegalo

    // if(errorNombre){
    //     form.nombre.className = 'error'
    // } else{
    //     form.nombre.className = "";
    // }

    // if(errorCiudad){
    //     form.ciudad.className = 'error'
    // }else{
    //     form.ciudad.className = ''
    // }

    // if(errores.DescripcionRegalo){
    //     form['descripcion-regalo'].className = 'error'
    // } else {
    //     form['descripcion-regalo'].className = ''
    // }
}

form.onsubmit = validarFormulario;

