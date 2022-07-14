export default class Modais {
    static botaofechar = document.querySelector(".btn_fechar")
    
    static criarHabito() {
        const modalPage = document.querySelector(".modal_page")
        modalPage.innerText = ""
        
        const corpoPrincipal = document.createElement("div")
        
        const cabecalhoCriar = document.createElement("div")
        const cabecalhoTitulo = document.createElement("h3")
        const btnFechar = document.createElement("button")

        const corpoConteudo = document.createElement("div")
        const conteudoCabecalho = document.createElement("p")
        const inputTitulo = document.createElement("input")

        const conteudoDescricao = document.createElement("p")
        const inputDescricao = document.createElement("textarea")
        
        const conteudoCategoria = document.createElement("p")
        const selecao = document.createElement("select")

        const option1 = document.createElement("option")
        const option2 = document.createElement("option")
        const option3 = document.createElement("option")
        const option4 = document.createElement("option")
        const option5 = document.createElement("option")

        const btnInserir = document.createElement("button")

        corpoPrincipal.classList.add("corpo_principal")
        cabecalhoCriar.classList.add("cabecalho")
        cabecalhoTitulo.classList.add("cabecalho_titulo")
        btnFechar.classList.add("btn_fechar")
        corpoConteudo.classList.add("corpo_conteudo")
        conteudoCabecalho.classList.add("conteudo_cabecalho")
        inputTitulo.classList.add("input_titulo")
        conteudoDescricao.classList.add("conteudo_descricao")
        inputDescricao.classList.add("input_descricao")
        conteudoCategoria.classList.add("conteudo_categoria")
        selecao.classList.add("selecao")
        btnInserir.classList.add("btn_inserir")

        option1.value = "selecionar"
        option2.value = "saude"
        option3.value = "trabalho"
        option4.value = "lazer"
        option5.value = "estudos"

        cabecalhoTitulo.innerText = "Criar Habito"
        btnFechar.innerText = "X"
        conteudoCabecalho.innerText = "Titulo"
        conteudoDescricao.innerText = "Descrição"
        inputDescricao.placeholder = "Digitar descrição"
        inputDescricao.required = true
        conteudoCategoria.innerText = "Categoria"
        selecao.name = "selecionar"
        btnInserir.innerText = "Inserir"
        inputTitulo.placeholder = "Digitar título"
        inputTitulo.required = true

        option1.innerText = "Selecionar Categoria"
        option2.innerText = "Saude"
        option3.innerText = "Trabalho"
        option4.innerText =  "Lazer"
        option5.innerText ="Estudos"

        cabecalhoCriar.append(cabecalhoTitulo, btnFechar)
        selecao.append(option1, option2, option3, option4,option5)
        corpoConteudo.append(conteudoCabecalho, inputTitulo, conteudoDescricao, inputDescricao, conteudoCategoria, selecao)
        corpoPrincipal.append(cabecalhoCriar, corpoConteudo, btnInserir)
        modalPage.appendChild(corpoPrincipal)

        const styleModais = document.querySelector(".style-modais")
        styleModais.href = "src/css/styleModais/criarHabito.css"
    }

    static editarHabito(habitotitulo, habitodescricao, habitoCategoria) {

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
        const option1 = document.createElement("option")
        const option2 = document.createElement("option")
        const option3 = document.createElement("option")
        const option4 = document.createElement("option")
        const option5 = document.createElement("option")
    
        const status = document.createElement("input")
    
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

        btn_alterar.classList.add("btn_alterar")
        btn_excluir.classList.add("btn_excluir")
    
        //////////////////Valores//////////////////
    
        cabecalho_editar.innerText = "Editar"
        input_titulo.type = "text"
        input_titulo.innerText = ""
        input_titulo.value = habitotitulo
        btn_fechar.innerText = "X"
        titulo_texto.innerText = "Titulo"

        titulo_descricao.innerText = "Descrição"
        input_descricao.type = "text"
        input_descricao.innerText = ""
        input_descricao.value = habitodescricao

        titulo_categoria.innerText = "Categoria"

        option1.value = "selecionar"
        option1.innerText = "Selecionar Categoria"

        option2.value = "saude"
        option2.innerText = "Saude"

        option3.value = "trabalho"
        option3.innerText = "Trabalho"

        option4.value =  "lazer"
        option4.innerText = "Lazer"

        option5.value =  "estudos"
        option5.innerText = "Estudos"

        btn_excluir.innerText = "Excluir"
        btn_alterar.innerText = "Salvar Alterações"
            
        if (option2.value == habitoCategoria){
            option2.selected = true
        } else if (option3.value == habitoCategoria){
            option3.selected = true
        } else if (option4.value == habitoCategoria){
            option4.selected = true
        } else if (option5.value == habitoCategoria){
            option5.selected = true
        }
        //////////////////Append//////////////////////
    
        selecao.append(option1,option2,option3,option4,option5)

        cabecalho.append(cabecalho_editar, btn_fechar)

        titulo.append(titulo_texto,input_titulo, titulo_descricao, input_descricao, titulo_categoria,selecao)

        corpoPrincipal.append(cabecalho, titulo,btn_excluir,btn_alterar)

        modalPage.appendChild(corpoPrincipal)

        const styleModais = document.querySelector(".style-modais")
        styleModais.href = "src/css/styleModais/editarHabito.css"
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
        corpoPrincipal1.classList.add("corpo_principal1")
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

        const styleModais = document.querySelector(".style-modais")
        styleModais.href = "src/css/styleModais/editarPerfil.css"
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
        modalPage.append(corpoPrincipal)
        
            
        const styleModais = document.querySelector(".style-modais")
        styleModais.href = "src/css/styleModais/excluirHabito.css"
    }


  
}