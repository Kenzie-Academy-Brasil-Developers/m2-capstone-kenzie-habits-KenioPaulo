export default class Modais {
    static criarHabito() {

    }

    static editarHabito() {

    }

    static editarPerfil() {
        const modalPage = document.querySelector(".modal_page")
        modalPage.innerText = ""

        const corpoPrincipal = document.createElement("div")

        const corpoBtn = document.createElement("div")
        const titulo = document.createElement("h3")
        const btnFechar = document.createElement("button")

        const corpoPrincipal1 = document.createElement("div")
        const p = document.createElement("p")
        const principalNome = document.createElement("input")
        const principalMensagem = document.createElement("p")
        const principalImagem = document.createElement("input")
        const btnSalvar = document.createElement("button")

        corpoPrincipal.classList.add("corpo_principal")
        corpoBtn.classList.add("corpo_btn")
        titulo.classList.add("titulo")
        btnFechar.classList.add("btn_fechar")
        corpoPrincipal1.classList.add("corpo_principal")
        principalNome.classList.add("principal_nome")
        principalMensagem.classList.add("principal_mensagem")
        principalImagem.classList.add("principal_imagem")
        btnSalvar.classList.add("btn_salvar")

        titulo.innerText = "Editar Perfil"
        btnFechar.innerText = "X"
        p.innerText = "Nome"
        principalNome.type = "text"
        principalMensagem.innerText = "URL da imagem do perfil"
        principalImagem.placeholder = "url da imagem"
        principalImagem.type = "text"
        btnSalvar.innerText = "Salvar alteraçoes"

        corpoBtn.append(titulo, btnFechar)
        corpoPrincipal1.append(p, principalNome, principalMensagem, principalImagem, btnSalvar)
        corpoPrincipal.append(corpoBtn, corpoPrincipal1)
        modalPage.appendChild(corpoPrincipal)
    }

    static excluirHabito() {
        const modalPage = document.querySelector(".modal_page")
        modalPage.innerText = ""
        
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

        corpoBtn.append(corpoTitulo, btnExcluir)
        corpoMensagem.append(tituloMensagem, avisoMensagem)
        corpoCancelar.append(btnCancelar, btnConfirmar)
        corpoPrincipal.append(corpoBtn, corpoMensagem, corpoCancelar)
        modalPage.appendChild(corpoPrincipal)
    }
}