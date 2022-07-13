import Requisicoes from "../models/Requisicoes.models.js"
import Modais from "./Modais.controller.js"
import { botaoCheck, botaoEditarPerfil, botaoEditarTarefa } from "./Botoes.controller.js"
import Tabela from "../models/tabela.model.js"

const botaoTodos = document.querySelector(".bttn_Todos")
botaoTodos.addEventListener("click", () =>{
    Requisicoes.readAll()
    
})

async function filtrarConcluidos(){
    const filtroTrue = await Requisicoes.readAll()
    filtroTrue.filter((event) => {
        return event.habit_status === true
    })
    return filtroTrue
}

function btnConcluidos() {
    const botaoConcluidos = document.querySelector(".bttn_Concluidos")

    botaoConcluidos.addEventListener("click", async (event) =>{
    const listaConcluidos = await filtrarConcluidos()
    document.querySelector(".tabela").innerText = ""
    Tabela.criarThead()
    listaConcluidos.forEach(elem => {
        Tabela.criaLinha(elem)
     })
    botaoCheck()
    botaoEditarPerfil()
    botaoEditarTarefa()
})

}
export {btnConcluidos}