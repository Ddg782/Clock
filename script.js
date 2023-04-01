// class User{
//     constructor(name,email,password){
//         this.name=name
//         this.email=email
//         this.password=password
//     }
//     login(){
//        let password=prompt(`${this.name} введите пароль для почты ${this.email}`)
//        if (this.password==password){
//         alert("Добро пожаловать!")
//        }
//        else{
//         alert("Неверный пароль")
//        }
//     }
// }
// let user1=new User("Робин","Robin23123@gmail.com","123456")
// console.log(user1)
// user1.login()
// let user2=new User("Джон","John7883211@mail.ru","7362_0")
// user2.login()
let clock = document.querySelector("h1");
let today = document.querySelector("p");
let toggleBtn = document.querySelector("button");
let id;
function tick() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    clock.innerHTML = `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
    today.innerHTML = `${day < 10 ? "0" + day : day}.${
        month < 10 ? "0" + month : month
    }.${year}`;
    document.body.style.background="#"+clock.innerHTML.replaceAll(":","")
}
toggleBtn.addEventListener("click", function () {
    if (toggleBtn.innerHTML == "Стоп") {
        toggleBtn.innerHTML = "Старт";
        clearInterval(id);
    } else {
        toggleBtn.innerHTML = "Стоп";
        tick();
        id = setInterval(tick, 1000);
    }
});
tick();
id = setInterval(tick, 1000);
