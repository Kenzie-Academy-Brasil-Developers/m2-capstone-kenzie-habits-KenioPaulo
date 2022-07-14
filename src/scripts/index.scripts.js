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


// const botaoEditar = document.querySelector(".btn_editar")
// botaoEditar.addEventListener("click", () => {
//     Modais.editarPerfil()
//     document.querySelector(".modal_page").style.display = "block"
//     const botaoSalvar = document.querySelector('.btn_salvar')
//     botaoSalvar.addEventListener("click", () => {
//         const inputImagem = document.querySelector('.principal_imagem')
//         const foto = {
//             usr_image: ""
//         }
//         if (inputImagem.value !== "") {
//             foto.usr_image = inputImagem.value
//             console.log(foto)
//             Requisicoes.updateProfile(foto)
//         } else {alert("Coloque uma url de uma imagem")}
//     })

// })

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