export default class Modais {
    static criarHabito() {

    }

    static editarHabito() {

        const modalPage = document.querySelector(".modal_page")
        modalPage.innerText = ""

        const corpoPrincipal = document.createElement("div")

        const cabecalho = document.createElement("div")
        const cabecalho_editar = document.createElement("h2")
        const btn_fechar = document.createElement("button")
    
    
    
        const titulo = document.createElement("div")
    
        const titulo_texto = document.createElement("p")
        const input_titulo = document.createElement("input")
    
    
        const titulo_descricao = document.createElement("p")
        const input_descricao = document.createElement("input")
    
    
        const titulo_categoria = document.createElement("p")
        const selecao = document.createElement("select")
        const option = document.createElement("option")
    
    
        const btn_excluir = document.createElement("button")
        const btn_alterar = document.createElement("button")
    
    ////////Classes///////////////////////////
    
            corpoPrincipal.classList.add('corpo_principal')
            cabecalho.classList.add('cabecalho')
            cabecalho_editar.classList.add("cabecalho_editar")
            btn_fechar.classList.add('btn_fechar')
    
    
            titulo.classList.add("titulo")
    
            titulo_texto.classList.add("titulo_texto")
            input_titulo.classList.add("input_titulo")
    
            titulo_descricao.classList.add("titulo_descricao")
            input_descricao.classList.add("input_descricao")
    
            titulo_categoria.classList.add("titulo_categoria")
            selecao.classList.add("selecao")
    
    //////////////////Valores//////////////////
    
            cabecalho_editar.innerText = "Editar"
            input_titulo.type = "text"
            input_titulo.innerText = ""
    
            titulo_descricao.innerText = "Descrição"
            input_descricao.type = "text"
            input_descricao.innerText = ""
    
            titulo_categoria.innerText = "Categoria"
    
            option.value = "selecionar"
            option.innerText = "Selecionar Categoria"
            option.value = "saude"
            option.innerText = "Saude"
    
            option.value = "tabalho"
            option.innerText = "Trabalho"
    
            option.value =  "lazer"
            option.innerText = "Lazer"
    
            option.value =  "estudos"
            option.innerText = "Estudos"
    
            btn_excluir.innerText = "Excluir"
            btn_alterar.innerText = "Salvar Alterações"
            
    
    //////////////////Append//////////////////////
    
            selecao.append(option)
    
            cabecalho.append(cabecalho_editar, btn_fechar)
    
            titulo.append(titulo_texto,input_titulo, titulo_descricao, input_descricao, titulo_categoria,selecao)
    
            corpoPrincipal.append(cabecalho, titulo)

            modalPage.appendChild(corpoPrincipal)
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