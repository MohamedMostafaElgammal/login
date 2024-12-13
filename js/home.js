let logoutBtn = document.getElementById("logout");
let welcomeMsg = document.getElementById("welcomeMsg")


logoutBtn.addEventListener("click",function(){
    window.location = 'index.html';
})

window.addEventListener("load", function () {
    displayUser();
})


function displayUser() {

        welcomeMsg.innerHTML = `Welcome ${localStorage.getItem("userName")}`;
    


}