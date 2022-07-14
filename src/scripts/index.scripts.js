import Requisicoes from "../models/Requisicoes.models.js";
import Tabela from "../models/tabela.model.js";
import Modais from "../controller/Modais.controller.js";
import {botaoEditarPerfil, botaoLogout, botaoCriarHabito, botaoCheck, botaoEditarTarefa } from "../controller/Botoes.controller.js";
import {btnConcluidos} from "../controller/Filtro.controller.js"

await Requisicoes.readAll()
 
const login = {
    "email": "grupo3Nicole@mail.com",
  "password": "343e627759cd17520661ad15047a3c8a"
}

botaoLogout()
botaoCriarHabito()
botaoEditarTarefa()
botaoCheck()
botaoEditarPerfil()
btnConcluidos()


if (localStorage.getItem("@kenzie:token") == null){
  window.location.replace("src/views/login.views.html")
} else {
  const userName     = document.querySelector(".user_name ")
  const userImg      = document.querySelector(".img_menu")
  const userHeader   = document.querySelector(".img_header")
  const user         = JSON.parse(localStorage.getItem("@kenzie:user"))
  userImg.src        = user.usr_image
  userName.innerText = user.usr_name
  userHeader.src     = user.usr_image
}



