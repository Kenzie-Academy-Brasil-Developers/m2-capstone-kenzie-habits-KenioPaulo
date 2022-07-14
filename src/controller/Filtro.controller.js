import Requisicoes from "../models/Requisicoes.models.js"
import Modais from "./Modais.controller.js"
<<<<<<< HEAD
import { botaoCheck, botaoEditarPerfil, botaoEditarTarefa } from "./Botoes.controller.js"
=======
import { botaoCheck , botaoEditarTarefa, botaoEditarPerfil } from "./Botoes.controller.js"
>>>>>>> 313464fd95cd769dcdf0f018eaf4ef90f72b2e2d
import Tabela from "../models/tabela.model.js"

const botaoTodos = document.querySelector(".bttn_Todos")
botaoTodos.addEventListener("click", () =>{
    document.location.reload(true)
    
})

async function filtrarConcluidos(){
    const filtroTrue = await Requisicoes.readAll()
    const filtrado = filtroTrue.filter((event) => {
        return event.habit_status === true
    })
    return filtrado
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
export {btnConcluidos, botaoTodos}