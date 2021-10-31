window.onload = iniciar;

function iniciar() {
    document.getElementById('send').addEventListener('click', validate, false);
}

function valida_nombre() {
    var elemento = document.getElementById('nombre');
    if (elemento.value == ''){
        alert('El campo nombre no puede estar vacío')
        return false
    }
    return true;
}

function valida_apellido() {
    var elemento = document.getElementById('apellido');
    if (elemento.value == ''){
        alert('El campo apellido no puede estar vacío')
        return false
    }
    return true;
}
function valida_email() {
    var elemento = document.getElementById('email');
    if (elemento.value == ''){
        alert('El campo email no puede estar vacío')
        return false
    }
    return true;
}

function validate(e){
    if(valida_nombre() && valida_apellido() && valida_email() && confirm('Desea enviar?')){
        return true;
    } else{
        e.preventDefault();
        return false;
    }
}