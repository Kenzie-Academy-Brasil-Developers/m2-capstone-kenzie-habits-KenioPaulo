import Requisicoes from "../models/Requisicoes.models.js";
import Tabela from "../models/tabela.model.js";
import Modais from "../controller/Modais.controller.js";


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

await Requisicoes.readAll()

// ate aqui
 
const login = {
    "email": "grupo3Nicole@mail.com",
  "password": "343e627759cd17520661ad15047a3c8a"
}


const botaoLogout = document.querySelector(".btn_logout")
botaoLogout.addEventListener("click", () => {
    localStorage.clear()
    window.location.replace("./src/views/login.views.html")
})



// const botaoCriar = document.querySelector(".bttn_Criar")
// botaoCriar.addEventListener('click', () => {
//     Modais.criarHabito()
// })


// Tabela.botaoEditar.addEventListener("click", () => {
//     Modais.editarHabito()
    
// })




import {botaoEditarTarefa , botaoCheck, botaoEditar } from "../controller/Botoes.controller.js";
botaoEditarTarefa()
botaoCheck()
botaoEditar()
import { btnConcluidos } from "../controller/Filtro.controller.js";
btnConcluidos()