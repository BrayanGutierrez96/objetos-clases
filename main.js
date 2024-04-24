import Usuario from "./clases.js"

const userName = document.getElementById("user-name")
const userLastname = document.getElementById("user-lastname")
const userEmail = document.getElementById("user-email")
const userAge = document.getElementById("user-age")
const btn = document.getElementById("btn")

const users = [];

btn.onclick = function () {
    function randomNumber(){
        return Math.floor(Math.random()*10)
    }
    if (userName.value != "" && userLastname.value != "" && userEmail.value != "" && userAge.value != "") {
        const newUser = new Usuario(2,true,true,userName.value,userLastname.value,userAge.value,userEmail.value,randomNumber())
        users.push(newUser)
        users.forEach((elemento) => {
            setTimeout(() => {
                console.log(elemento);
            }, 1000);
            
        })
    }else{
        alert("Faltan campos por completar")
    }
}







