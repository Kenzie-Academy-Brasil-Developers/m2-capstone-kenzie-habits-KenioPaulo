import Requisicoes from "./Requisicoes.models.js";

export default class FormLogin {
    static registerForm = document.getElementById("login_form");
    static buttonForm = document.querySelector(".button_form");
    static token = ""

    static async handleSubmit(e) {
        e.preventDefault()
        let data = {};
        const elements = FormLogin.registerForm.elements;
        for (let i = 0; i < elements.length; i++) {
            let item = elements[i];
            if (item.name !== "") {
            data[item.name] = item.value;
            }
        }
        await Requisicoes.userLogin(data)
    }

    static async printErr(err) {
        const erro = document.querySelector(".erro")
        erro.innerText = err
    }    
}