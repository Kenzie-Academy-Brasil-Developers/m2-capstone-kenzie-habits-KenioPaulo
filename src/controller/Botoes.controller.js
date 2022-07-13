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
    
        
        Requisicoes.createHabit()
    })
})

function botaoEditar() {
    const botaoEditar = document.querySelector(".btn_editar")
    botaoEditar.addEventListener("click", () => {
        Modais.editarPerfil()
        document.querySelector(".modal_page").style.display = "block"
        document.querySelector(".btn_fechar").addEventListener("click", () => {
            document.querySelector(".modal_page").style.display = "none"
        }) 
        const botaoSalvar = document.querySelector('.btn_salvar')
        botaoSalvar.addEventListener("click", () => {
            alert("botao correto")
            Requisicoes.updateProfile(foto)
        })
    
    })
}




function botaoCheck () {
        const check = document.querySelectorAll(".button_check")
    check.forEach(elem => {
        elem.addEventListener("click", (event) => {
        const evento = event.target
        console.log(evento.parentNode.parentNode.id)
            if (evento.tagName === "INPUT" && evento.parentNode.parentNode.id !== "") {
                const filhos = evento.parentNode.parentNode.children 
                const arrayFilhos = [...filhos]
                console.log(evento)
                if(arrayFilhos[1].style.textDecoration !== "line-through"){
                    arrayFilhos[1].style.textDecoration = "line-through"
                } else if (arrayFilhos[1].style.textDecoration == "line-through"){
                    arrayFilhos[1].style.textDecoration = "none"
                }
                        
            }
        })
    })
}



function botaoEditarTarefa() {
    const editar = document.querySelectorAll(".button_editar")
    
    editar.forEach(elem => {
        elem.addEventListener("click", (event) => {
            const id = event.target.parentNode.parentNode.id
            
            Modais.editarHabito(event.target.parentNode.parentNode.id)
            document.querySelector(".modal_page").style.display = "block"
            document.querySelector(".btn_fechar").addEventListener("click", () => {
                const modal = document.querySelector(".modal_page")
                modal.innerText = ""
                modal.style.display = "none"
            })
            document.querySelector(".btn_excluir").addEventListener("click", () =>{
                Modais.excluirHabito()
                document.querySelector(".modal_page").style.display = "block"
                document.querySelector(".btn_cancelar").addEventListener("click", () =>{
                    document.querySelector(".modal_page").style.display = "none" 
                })
                document.querySelector(".btn_sim").addEventListener("click", ()=>{
                        
                        Requisicoes.deleteHabit(id)
                        Requisicoes.readAll()
                        document.querySelector(".modal_page").style.display = "none"
                })
            })
        })
    })
}


export {botaoCheck , botaoEditarTarefa, botaoEditar}
