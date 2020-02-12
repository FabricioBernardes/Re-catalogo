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
    document.getElementById("formulario-imagens-container").innerHTML = (null)
}

function insereImagens (nimagens) {
    for (var i=0; i<nimagens; i++){
        document.getElementById("formulario-imagens-container").innerHTML += ('<img class="formulario-imagens-item" src="img/lorem-picsum.jpg">');
    }
}

function carregaImagens (nimagens, id){
    var listaImagens = document.getElementsByClassName("formulario-imagens-item");
    for (var i=0; i<nimagens; i++){
        listaImagens[i].src = id.formularioImagensItem[i];
    }
}

function insereDados (x) {
    fetch ('dados.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        var id = data["id" + x];
        var nimagens = id.formularioImagensItem.length;



        document.getElementById("formulario-header-identificador").innerHTML = (id.headerFormularioIdentificador);
        document.getElementById("formulario-header-imagem").src = (id.headerFormularioImagem);
        document.getElementById("formulario-header-referencia").innerHTML = (id.headerFormularioReferencia);

        document.getElementById("formulario-descricao1-especie").innerHTML = (id.formularioDescricao1Especie);
        document.getElementById("formulario-descricao1-u-paradeiro").innerHTML = (id.formularioDescricao1UParadeiro);
        document.getElementById("formulario-descricao1-descricao").innerHTML = (id.formularioDescricao1Descricao);
        document.getElementById("formulario-descricao1-referencia").innerHTML = (id.formularioSescricao1Referencia);

        document.getElementById("formulario-descricao2-conservacao").innerHTML = (id.formularioDescricao2Conservacao);
        document.getElementById("formulario-descricao2-tipologia").innerHTML = (id.formularioDescricao2Cipologia);

        document.getElementById("formulario-descricao3-citacoes").innerHTML = (id.formularioDescricao3Citacoes);
        document.getElementById("formulario-descricao3-regiao").innerHTML = (id.formularioDescricao3Regiao);
        document.getElementById("formulario-descricao3-sitio").innerHTML = (id.formularioDescricao3Sitio);
        document.getElementById("formulario-descricao3-contexto").innerHTML = (id.formularioDescricao3Contexto);
        document.getElementById("formulario-descricao3-a-paradeiro").innerHTML = (id.formularioDescricao3AParadeiro);
        document.getElementById("formulario-descricao3-materia").innerHTML = (id.formularioDescricao3Materia);
        document.getElementById("formulario-descricao3-dimensoes").innerHTML = (id.formularioDescricao3Dimensoes);
        document.getElementById("formulario-descricao3-cavidade").innerHTML = (id.formularioDescricao3Cavidade);

        insereImagens(nimagens);
        carregaImagens(nimagens, id);
    })
}