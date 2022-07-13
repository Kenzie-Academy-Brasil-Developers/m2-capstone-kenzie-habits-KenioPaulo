import Requisicoes from "../models/Requisicoes.models.js";
import Tabela from "../models/tabela.model.js";
import Modais from "../controller/Modais.controller.js";
import {botaoEditarPerfil, botaoLogout, botaoCriarHabito, botaoCheck, botaoEditarTarefa } from "../controller/Botoes.controller.js";
import {btnConcluidos} from "../controller/Filtro.controller.js"

const userName     = document.querySelector(".user_name ")
const userImg      = document.querySelector(".img_menu")
const userHeader   = document.querySelector(".img_header")
const user         = JSON.parse(localStorage.getItem("@kenzie:user"))
userImg.src        = user.usr_image
userName.innerText = user.usr_name
userHeader.src     = user.usr_image


await Requisicoes.readAll()

botaoEditarPerfil()
botaoLogout()
botaoCriarHabito()
botaoCheck()
botaoEditarTarefa()
btnConcluidos()