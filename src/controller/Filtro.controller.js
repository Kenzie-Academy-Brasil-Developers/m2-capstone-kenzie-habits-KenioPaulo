import Requisicoes from "../models/Requisicoes.models.js"
import Botoes from "./Botoes.controller.js"
import Tabela from "../models/tabela.model.js"

export default class Filtro {
    static filtroTodos() {
        const botaoTodos = document.querySelector(".bttn_Todos")
        botaoTodos.addEventListener("click", () =>{
            document.location.reload(true)
        })
    }

    static async filtrarConcluidos(){
        const filtroTrue = await Requisicoes.readAll()
        const filtrado = filtroTrue.filter((event) => {
            return event.habit_status === true
        })
        return filtrado
    }

    static btnConcluidos() {
        const botaoConcluidos = document.querySelector(".bttn_Concluidos")
    
        botaoConcluidos.addEventListener("click", async (event) =>{
        const listaConcluidos = await Filtro.filtrarConcluidos()
        document.querySelector(".tabela").innerText = ""
        Tabela.criarThead()
        listaConcluidos.forEach(elem => {
            Tabela.criaLinha(elem)
         })
        Botoes.botaoCheck()
        Botoes.botaoEditarPerfil()
        Botoes.botaoEditarTarefa()
        })
    }
}