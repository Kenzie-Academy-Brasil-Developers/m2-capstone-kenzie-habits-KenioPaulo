import Requisicoes from "../models/Requisicoes.models.js";
import Tabela from "../models/tabela.model.js";
import Modais from "../controller/Modais.controller.js";



const userName     = document.querySelector(".user_name ")
const userImg      = document.querySelector(".img_menu")
const userHeader   = document.querySelector(".img_header")
const user         = JSON.parse(localStorage.getItem("@kenzie:user"))
userImg.src        = user.usr_image
userName.innerText = user.usr_name
userHeader.src     = user.usr_image

console.log(user)
window.addEventListener("onload" , () => {
	
})

const login = {
    "email": "grupo3Nicole@mail.com",
  "password": "343e627759cd17520661ad15047a3c8a"
}

Requisicoes.readAll()

const botaoCriar = document.querySelector(".bttn_Criar")
botaoCriar.addEventListener('click', () => {
    Modais.criarHabito()
})


Tabela.botaoEditar.addEventListener("click", () => {
    Modais.editarHabito()
})

const foto = {
    "usr_image": "https://images.pexels.com/photos/20291/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
}

Requisicoes.readAll()


