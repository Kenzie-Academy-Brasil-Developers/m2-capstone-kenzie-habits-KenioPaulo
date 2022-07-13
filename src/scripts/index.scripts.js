import Requisicoes from "../models/Requisicoes.models.js";
import Tabela from "../models/tabela.model.js";
import Modais from "../controller/Modais.controller.js";
import {
    botaoEditarPerfil,
    botaoLogout, 
    botaoCriarHabito, 
    botaoCheck, 
    botaoEditarTarefa 
} from "../controller/Botoes.controller.js";

// Fazer função ao carregar a pagina rodar isso tudo
const userName     = document.querySelector(".user_name ")
const userImg      = document.querySelector(".img_menu")
const userHeader   = document.querySelector(".img_header")
const user         = JSON.parse(localStorage.getItem("@kenzie:user"))
userImg.src        = user.usr_image
userName.innerText = user.usr_name
userHeader.src     = user.usr_image


// window.addEventListener("onload" , () => {
	
// })

Requisicoes.readAll()

// ate aqui
 
const login = {
    "email": "grupo3Nicole@mail.com",
  "password": "343e627759cd17520661ad15047a3c8a"
}

botaoEditarPerfil()
botaoLogout()
botaoCriarHabito()
botaoCheck()
botaoEditarTarefa()


// const req = {
//     habit_title: "Fiz isso aqui sem querer",
//     habit_description: "fazer todos os botoes darem certo",
//     habit_category: "Saude"
// }

// const req2 = {
//     habit_title: "testar botao editar",
//     habit_description: "fazer botao editar",
//     habit_category: "trabalho"
// }

// const req3 = {
//     habit_title: "testar botao concluidos",
//     habit_description: "filtro concluido",
//     habit_category: "lazer"
// }










