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

console.log(user)
window.addEventListener("onload" , () => {
	
})

Requisicoes.readAll()

// até aqui

const login = {
    "email": "grupo3Nicole@mail.com",
  "password": "343e627759cd17520661ad15047a3c8a"
}



const botaoEditar = document.querySelector(".btn_editar")
botaoEditar.addEventListener("click", () => {
    Modais.editarPerfil()
    document.querySelector(".modal_page").style.display = "block"
    const botaoSalvar = document.querySelector('.btn_salvar')
    botaoSalvar.addEventListener("click", () => {
        alert("botao correto")
        Requisicoes.updateProfile(foto)
    })

})

const foto = {
    "usr_image": "https://https://i.pinimg.com/564x/74/45/6c/74456c2bd47666329b9dee5dcad4ece7.jpg"
}







const botaoCriar = document.querySelector(".bttn_Criar")
botaoCriar.addEventListener('click', () => {
    Modais.criarHabito()
})


Tabela.botaoEditar.addEventListener("click", () => {
    Modais.editarHabito()
    
})








