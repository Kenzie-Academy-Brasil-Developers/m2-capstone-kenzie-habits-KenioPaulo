import Requisicoes from "../models/Requisicoes.models.js";
import Botoes from "../controller/Botoes.controller.js";
import Filtro from "../controller/Filtro.controller.js"

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

await Requisicoes.readAll()

Botoes.botaoEditarPerfil()
Botoes.botaoLogout()
Botoes.botaoCriarHabito()
Botoes.botaoCheck()
Botoes.botaoEditarTarefa()
Filtro.btnConcluidos()
Filtro.filtroTodos()


const login = {
    "email": "grupo3Nicole@mail.com",
  "password": "343e627759cd17520661ad15047a3c8a"
}

const fotosPerfil = {
    foto1: "https://s2.glbimg.com/vRaMmE_S3khsCp-Ot8GYmgEkvYE=/e.glbimg.com/og/ed/f/original/2017/01/16/tesla_circa_1890.jpeg",
    foto2: "https://blog.me.com.br/wp-content/uploads/2020/04/blog-imagem-1-e1588272102314.jpg",
    foto3: "https://conteudo.imguol.com.br/c/entretenimento/04/2022/02/25/batman-1645790799911_v2_900x506.jpg.webp",
}


