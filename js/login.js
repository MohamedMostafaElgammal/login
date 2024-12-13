let loginEmail =document.getElementById("Logininputemail");
let loginPass =document.getElementById("Logininputpass");
let btnLogin =document.querySelector(".btn");
let error = document.getElementById("error");
let incorrect = document.getElementById("alert");
let success =document.getElementById("success")
let list =[];

if(localStorage.getItem("list")!==null){
    list =JSON.parse(localStorage.getItem("list"))
}


btnLogin.addEventListener("click", function(){
    login()
    console.log("hello")

})


function login(){
    
   if(validationEmail()&&validationpass()){
    let userData={
        email:loginEmail.value,
        pass:loginPass.value
    };
    console.log(userData)
   
    if(displayUser(userData)===true){
        console.log("yes")
        success.classList.remove("d-none")
        incorrect.classList.add("d-none")
        window.location='./home.html'
      
    }
    else{
        console.log("noo")
        incorrect.classList.remove("d-none")
        success.classList.add("d-none")
    

    }
   }


  }

function displayUser(userData){
    for(let i = 0 ; i< list.length ; i++){
        if (list[i].email === userData.email && list[i].password === userData.pass) {

            console.log("userfound")
            localStorage.setItem("userName",list[i].name)
            return true
        }
    }
}

// function clearForm() {
//     loginEmailInput.value = null;
//     loginPassInput.value = null;
// }


function validationEmail(){
    let text =loginEmail.value;
    let regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;

    if(regex.test(text)){
        error.classList.add("d-none");
        return true;
    }
    else{
        error.classList.remove("d-none");
        return false;
    }
}

function validationpass(){
    let text =loginPass.value;
    let regex =/^[a-zA-Z0-9_-]{3,15}$/;

    if(regex.test(text)){
        incorrect.classList.add("d-none");
        return true;
    }
    else{
        incorrect.classList.remove("d-none");
        return false;
    }
}



