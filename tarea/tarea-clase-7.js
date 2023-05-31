/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */
/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo. Validar que no sean vacios.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores. 5 y 6
*
* */

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




function probarValidacionNombre(){
    console.assert(
        validacionNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validacionNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
        }
  
  
  function pruebaValidacionCiudad(){
      console.assert(
          validacionCiudad(''|| null || undefined) === 'Seleccione 1 opción'
      )
      console.assert(
          validacionCiudad(ciudad.value) === 'Validació exitosa'
      )
  }
  
  function pruebaValidacionComportamiento(){
          console.assert(
              validacionComportamiento(undefined) === 'Seleccione 1 opción'
      
          )
          console.assert(validacionComportamiento(null) === 'Seleccione 1 opción');
  
          console.assert(validacionComportamiento('') === 'Seleccione 1 opción') 
  }
  
  function pruebaValidacionDescripcionRegalo(){
      console.assert(
          validacionDescripcionRegalo('') === 'Tenes que escribir que es lo que queres este año de regalo'
      )
      console.assert(
          validacionDescripcionRegalo(assaasasadbiubsdiubddbasbadbuabduadbubdaubdaubduiabduabduabdudbndsnjdnsajndajndjnskndansdjkndakdsnjdnkndajnjanddjanajdsnjdnajdnjadnsaioidijadioajdjaioja) === 'Este campo debe puede tener hasta 150 caracteres'
      )
  };