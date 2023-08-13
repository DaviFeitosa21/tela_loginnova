document.getElementById("formulario-login").addEventListener("submit", function(event) {
    event.preventDefault() //impede o envio do formulário

    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    var mensagemAvisoUsuario = document.getElementById("msg-aviso-usuario")
    var mensagemAvisoSenha = document.getElementById("msg-aviso-senha")
    var mensagemAviso = document.getElementById("msg-aviso")

    if(usuario === "" && senha === "") {
        mensagemAviso.style.display = "block"
        mensagemAviso.classList.add("efeito")
        mensagemAvisoUsuario.style.display = "none"
        mensagemAvisoSenha.style.display = "none"

        setTimeout(function() {
            mensagemAviso.style.display = "none"
        }, 10000) //60000 milissegundos = 1 minuto
    }
    else if(usuario === "") {
        mensagemAvisoUsuario.style.display = "block"
        mensagemAvisoUsuario.classList.add("efeito")
        mensagemAviso.style.display = "none"
        mensagemAvisoSenha.style.display = "none"

        setTimeout(function() {
            mensagemAvisoUsuario.style.display = "none"
        }, 10000)
    }
    else if(senha === "") {
        mensagemAvisoSenha.style.display = "block"
        mensagemAvisoSenha.classList.add("efeito")
        mensagemAviso.style.display = "none"
        mensagemAvisoUsuario.style.display = "none"

        setTimeout(function() {
            mensagemAvisoSenha.style.display = "none"
        }, 10000)
    }
    else {
        mensagemAviso.style.display = "none"
    }

})
