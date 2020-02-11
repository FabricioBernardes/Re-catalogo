var formularioExpandido = document.getElementById("formulario-expandido");
var body = document.getElementById("body");

function abreFormulario (n) {
    formularioExpandido.style.display ="block";
    body.style.overflow = "hidden";
    insereDados(n);
}

function fechaFormulario(){
    formularioExpandido.style.display ="none";
    body.style.overflow = "auto";
}


function insereDados (x) {
    fetch ('dados.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        document.getElementById("formulario-header-identificador").innerHTML = (data["id" + x].headerFormularioIdentificador);
        document.getElementById("formulario-header-imagem").src = (data["id" + x].headerFormularioImagem);
        document.getElementById("formulario-header-referencia").innerHTML = (data["id" + x].headerFormularioReferencia);

        document.getElementById("formulario-descricao1-especie").innerHTML = (data["id" + x].formularioDescricao1Especie);
        document.getElementById("formulario-descricao1-u-paradeiro").innerHTML = (data["id" + x].formularioDescricao1UParadeiro);
        document.getElementById("formulario-descricao1-descricao").innerHTML = (data["id" + x].formularioDescricao1Descricao);
        document.getElementById("formulario-descricao1-referencia").innerHTML = (data["id" + x].formularioSescricao1Referencia);


        document.getElementById("formulario-descricao2-conservacao").innerHTML = (data["id" + x].formularioDescricao2Conservacao);
        document.getElementById("formulario-descricao2-tipologia").innerHTML = (data["id" + x].formularioDescricao2Cipologia);


        document.getElementById("formulario-descricao3-citacoes").innerHTML = (data["id" + x].formularioDescricao3Citacoes);
        document.getElementById("formulario-descricao3-regiao").innerHTML = (data["id" + x].formularioDescricao3Regiao);
        document.getElementById("formulario-descricao3-sitio").innerHTML = (data["id" + x].formularioDescricao3Sitio);
        document.getElementById("formulario-descricao3-contexto").innerHTML = (data["id" + x].formularioDescricao3Contexto);
        document.getElementById("formulario-descricao3-a-paradeiro").innerHTML = (data["id" + x].formularioDescricao3AParadeiro);
        document.getElementById("formulario-descricao3-materia").innerHTML = (data["id" + x].formularioDescricao3Materia);
        document.getElementById("formulario-descricao3-dimensoes").innerHTML = (data["id" + x].formularioDescricao3Dimensoes);
        document.getElementById("formulario-descricao3-cavidade").innerHTML = (data["id" + x].formularioDescricao3Cavidade);




    })
}