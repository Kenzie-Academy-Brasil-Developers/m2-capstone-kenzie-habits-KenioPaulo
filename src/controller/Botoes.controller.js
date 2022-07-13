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

function botaoEditarPerfil() {
    const botaoEditar = document.querySelector(".btn_editar")
    botaoEditar.addEventListener("click", () => {
        Modais.editarPerfil()
        document.querySelector(".modal_page").style.display = "block"
        document.querySelector(".btn_fechar").addEventListener("click", () => {
            document.querySelector(".modal_page").style.display = "none"
        }) 
        const botaoSalvar = document.querySelector('.btn_salvar')
        botaoSalvar.addEventListener("click", () => {
            const inputImagem = document.querySelector('.principal_imagem')
            const foto = {
                usr_image: ""
            }
            if (inputImagem.value !== "") {
                foto.usr_image = inputImagem.value
                console.log(foto)
                Requisicoes.updateProfile(foto)
            } else {alert("Coloque uma url de uma imagem")}
        })
    
    })
}

function botaoLogout () {
    const botaoLogout = document.querySelector(".btn_logout")
    botaoLogout.addEventListener("click", () => {
        localStorage.clear()
        window.location.replace("./src/views/login.views.html")
    })
}


function botaoCriarHabito() {
    const botaoCriar = document.querySelector(".bttn_Criar")
    botaoCriar.addEventListener('click', () => {
        Modais.criarHabito()
        document.querySelector(".modal_page").style.display = "block"
        document.querySelector(".btn_fechar").addEventListener("click", ()=>{
            document.querySelector(".modal_page").style.display = "none"
        })
        document.querySelector(".btn_inserir").addEventListener("click", async () =>{
            const titulo = document.querySelector(".input_titulo").value
            const descricao = document.querySelector(".input_descricao").value
            const selecao = document.querySelectorAll(".selecao")
            const data = {
                habit_title: titulo,
                habit_description: descricao,
                habit_category: selecao[0].value
            }
            
            await Requisicoes.createHabit(data)
            document.location.reload(true)
        })
    })
}



function botaoCheck () {
        const check = document.querySelectorAll(".button_check")
    check.forEach(elem => {
        elem.addEventListener("click", (event) => {
        const evento = event.target
        const id = evento.parentNode.parentNode.id
            if (evento.tagName === "INPUT" && evento.parentNode.parentNode.id !== "") {
                const filhos = evento.parentNode.parentNode.children 
                const arrayFilhos = [...filhos]
                console.log(evento)
                if(arrayFilhos[1].style.textDecoration !== "line-through"){
                    // console.log(evento.parentNode.parentNode.id)
                    arrayFilhos[1].style.textDecoration = "line-through"
                    Requisicoes.completeHabit(id)
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
                document.querySelector(".btn_sim").addEventListener("click", async ()=>{
                        
                        await Requisicoes.deleteHabit(id)
                        document.location.reload(true)
                        document.querySelector(".modal_page").style.display = "none"
                })
            })
        })
    })
}


export {botaoCheck , botaoEditarTarefa, botaoEditarPerfil , botaoLogout, botaoCriarHabito}
