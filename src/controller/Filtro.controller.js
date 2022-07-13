import Requisicoes from "../models/Requisicoes.models"




const botaoTodos = document.querySelector(".bttn_Todos")
botaoTodos.addEventListener("click", () =>{
   return  readAll()
})

function filtrarConcluidos(data){
    const filtroTrue = this.readAll().filter((event) => {
        return event.habit_status = data
    })
    return filtroTrue
}

const botaoConcluidos = document.querySelector(".bttn_Concluidos")
botaoConcluidos.addEventListener("click", event =>{
    const listaConcluidos = filtrarConcluidos(true)
    readAll(listaConcluidos)
})

  