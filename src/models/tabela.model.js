export default class Tabela {
    static tabela      = document.querySelector(".tabela")
    static linhas      = document.getElementsByClassName("linha")
    static arrayLinhas = [...Tabela.linhas]

    
    static criaLinha(objeto) {
 
        const tr          = document.createElement("tr")
        const checkbox    = this.criaCheckbox()
        const titulo      = this.criaTitulo(objeto.habit_title)
        const descricao   = this.criaDescricao(objeto.habit_description)
        const categoria   = this.criaCategoria(objeto.habit_category)
        const botaoEditar = this.criaBotao()
        tr.id             = objeto.habit_id
        tr.classList.add("linha")

        tr.append(checkbox,titulo,descricao,categoria,botaoEditar)
        this.tabela.append(tr)
    }

    static criaCheckbox() {
        const td       = document.createElement("td")
        const checkbox = document.createElement("input")
        checkbox.type  = "checkbox"
        td.classList.add("td_checkbox")
        checkbox.classList.add("button_check")
        td.append(checkbox)
        return td
    }

    static criaTitulo(texto) {
        const td     = document.createElement("td")
        td.innerText = texto
        td.classList.add("tarefas")
        return td
    }

    static criaDescricao(texto) {
        const td     = document.createElement("td")
        td.innerText = texto
        td.classList.add("descricao")
        return td
    }

    static criaCategoria(texto) {
        const td       = document.createElement("td")
        const span     = document.createElement("span")
        span.innerText = texto
        span.classList.add("categoria")
        td.classList.add("td_categoria")
        td.append(span)
        return td
    }

    static criaBotao() {
        const td         = document.createElement("td")
        const button     = document.createElement("button")
        button.innerText = "..."
        button.classList.add("button_editar")
        td.classList.add("td_editar")
        td.append(button)
        return td
    }
}