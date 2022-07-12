export default class Requisicoes {
    static base_url = "https://habits-kenzie.herokuapp.com/api"

    static async updateProfile(data) {
        return await fetch(`${this.base_url}/user/profile`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("@kenzie:token")}`

            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(err => err)
    }

    static async userLogin(data) {
        return await fetch(`${this.base_url}/userLogin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            localStorage.setItem(`@kenzie:token`, response.token)
            localStorage.setItem(`@kenzie:user`, JSON.stringify(response.response))
            return response
        })
        .catch(err => console.log(err))
    }

    static async createHabit(data) {
        return await fetch(`${this.base_url}/habits`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("@kenzie:token")}`
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }
}