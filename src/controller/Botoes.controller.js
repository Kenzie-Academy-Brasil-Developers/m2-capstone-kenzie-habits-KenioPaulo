import Requisicoes from "../models/Requisicoes.models.js";
import Tabela from "../models/tabela.model.js";
import Modais from "../controller/Modais.controller.js";



const botaoCriar = document.querySelector(".bttn_Criar")
botaoCriar.addEventListener('click', () => {
    Modais.criarHabito()
    document.querySelector(".modal_page").style.display = "block"
    document.querySelector(".btn_fechar").addEventListener("click", ()=>{
        document.querySelector(".modal_page").style.display = "none"
    })
    document.querySelector(".btn_inserir").addEventListener("click", () =>{
        Requisicoes.createHabit(Modais.Dados())
    })
})








Tabela.botaoEditar.addEventListener("click", () => {
    Modais.editarHabito()
    
})

const botaoEditar = document.querySelector(".btn_editar")
botaoEditar.addEventListener("click", () => {
    Modais.editarPerfil()
    document.querySelector(".modal_page").style.display = "block"
    const botaoSalvar = document.querySelector('.btn_salvar')
    botaoSalvar.addEventListener("click", () => {
        alert("botao correto")
        Requisicoes.updateProfile(foto)
    })

})