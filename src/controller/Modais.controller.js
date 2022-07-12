export default class Modais {
    static criarHabito() {

    }

    static editarHabito(idHabito) {

    }

    static editarPerfil() {

    }

    static excluirHabito(idHabito) {
        const corpoPrincipal = document.createElement("div")

        const corpoBtn = document.createElement("div")
        const corpoTitulo = document.createElement("h3")
        const btnExcluir = document.createElement("button")

        const corpoMensagem = document.createElement("div")
        const tituloMensagem = document.createElement("h3")
        const avisoMensagem = document.createElement("button")

        const corpoCancelar = document.createElement("div")
        const btnCancelar = document.createElement("h3")
        const btnConfirmar = document.createElement("p")

        corpoPrincipal.classList.add("corpo_principal")
        corpoBtn.classList.add("corpo_btn")
        corpoTitulo.classList.add("titulo")
        btnExcluir.classList.add("btn_excluir")
        corpoMensagem.classList.add("corpo_mensagem")
        tituloMensagem.classList.add("mensagem_titulo")
        tituloMensagem.classList.add("Certeza que deseja excluir esse habito?")
        avisoMensagem.classList.add("mensagem_aviso")
        corpoCancelar.classList.add("corpo_cancelar")
        btnCancelar.classList.add("btn_cancelar")
        btnConfirmar.classList.add("btn_sim")
        
        corpoTitulo.innerText = "Excluir Habito"
        btnExcluir.innerText = "X"
        avisoMensagem.innerText = "Após executar essa ação não será possível desfazer"
        btnCancelar.innerText = "Cancelar"
        btnConfirmar.innerText = "Sim,excluir este habito"
    }
}