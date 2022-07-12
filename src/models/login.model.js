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
        await FormLogin.loginUser(data)
    }

    static async loginUser(data) {
        const response = await fetch(
            "https://habits-kenzie.herokuapp.com/api/userLogin",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data), 
            }
        )
        .then((res) => res.json())
        .then((res) => {
            if(res.token){
                localStorage.setItem("userId", res.userId)
                localStorage.setItem("token", res.token)
                console.log(localStorage.getItem("token"))
                // window.location.replace("/src/pages/principal.html")
            } else {
                alert("login invalido")
            }
            
            return res
        })
        .catch((error) => console.log(error));
        
        return response;
    }

}