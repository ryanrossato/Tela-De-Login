var usuario = document.getElementById("usuario");
var senha = document.getElementById("senha");

// Armazena a variável no localStorage
localStorage.setItem("minhaChave", usuario);
localStorage.setItem("minhaChave", senha);

// Recupera a variável do localStorage
var valorRecuperado = localStorage.getItem("minhaChave");

// Exibe o valor recuperado no console
console.log("Valor recuperado:", valorRecuperado);


function redirecionar(){
    window.location.href="loginok.html"
}

function voltar(){
    window.location.href="main.html"
}


function transformarParaAsteriscos(input) {
    // Obtém o valor digitado no input
    var texto = input.value;

    // Substitui cada caractere por asterisco
    var textoAsteriscos = '';
    for (var i = 0; i < texto.length; i++) {
        textoAsteriscos += '*';
    }

    // Define o valor do input como os asteriscos
    input.value = textoAsteriscos;
}

