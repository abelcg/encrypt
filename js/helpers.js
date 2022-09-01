/* Validaciones */

//solo minusculas y sin acentos
export const validar = (input) =>{
    let alert = document.getElementById("alert")
    let patron = /[A-Z\u00C0-\u017F]+/g
    if(patron.test(input.value)) {
        alert.className = '';
        return true;
      } else {
        alert.className = 'd-none';
        return false;
      }
}

