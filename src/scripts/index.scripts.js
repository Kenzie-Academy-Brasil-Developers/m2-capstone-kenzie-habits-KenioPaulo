import Requisicoes from "../models/Requisicoes.models.js";
import Botoes from "../controller/Botoes.controller.js";
import Filtro from "../controller/Filtro.controller.js"

// const userName     = document.querySelector(".user_name ")
// const userImg      = document.querySelector(".img_menu")
// const userHeader   = document.querySelector(".img_header")
// const user         = JSON.parse(localStorage.getItem("@kenzie:user"))
// userImg.src        = user.usr_image
// userName.innerText = user.usr_name
// userHeader.src     = user.usr_image


await Requisicoes.readAll()

Botoes.botaoEditarPerfil()
Botoes.botaoLogout()
Botoes.botaoCriarHabito()
Botoes.botaoCheck()
Botoes.botaoEditarTarefa()
Filtro.btnConcluidos()
Filtro.filtroTodos()


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