var formularioExpandido = document.getElementById("formulario-expandido");
var body = document.getElementById("body");

function abreFormulario (){
    formularioExpandido.style.display ="block";
    body.style.overflow = "hidden";
}

function fechaFormulario(){
    formularioExpandido.style.display ="none";
    body.style.overflow = "auto";
}