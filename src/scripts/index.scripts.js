import Requisicoes from "../models/Requisicoes.models.js";
import Tabela from "../models/tabela.model.js";
import Modais from "../controller/Modais.controller.js";

const userName     = document.querySelector(".user_name")
const userImg      = document.querySelector(".img_menu")
const userHeader   = document.querySelector(".img_header")
const user         = JSON.parse(localStorage.getItem("@kenzie:user"))
userImg.src        = user.usr_image
userName.innerText = user.usr_name
userHeader.src     = user.usr_image

console.log(user)
window.addEventListener("onload" , () => {
	
})


Requisicoes.readAll()

Modais.criarHabito()
// Modais.editarHabito()
