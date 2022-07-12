export default class Modais {
    static criarHabito() {

    }

    static editarHabito() {
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