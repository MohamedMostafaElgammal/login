let signupName =document.getElementById("signupName")
let signEmail =document.getElementById("signupemail");
let signPass =document.getElementById("signuPass");
let btnSign =document.querySelector(".btn");
let btnsignup =document.getElementById("btnsignup")
let error = document.getElementById("error");
let incorrect = document.getElementById("alert");
let list =[];

if(localStorage.getItem("list")!==null){
    list =JSON.parse(localStorage.getItem("list"))
}


btnSign.addEventListener("click", function(){
  console.log("hello")
  signup()

})


function signup(){
  if(validationName()&&validationEmail()&&validationPass()){
    let account={
        name :signupName.value,
        email:signEmail.value,
        password :signPass.value,
      }
  
      if(displsyCount(account)===true){
        
        let repeat=document.getElementById("repeat");
        repeat.classList.add("d-none");

      }
      else {
        list.push(account);
        localStorage.setItem("list", JSON.stringify(list));
      
        displsyCount(account)
        clearForm();
        let success =document.getElementById("success");
        success.classList.add("d-none");
        repeat.classList.remove("d-none");
       
      
      }
     
  
  }
  else{
    success.classList.add("d-none");
  }
}

function displsyCount(account){
for(let i =0 ;i <list.length ;i++){
    if(list[i].email.toLowerCase()===account.email.toLowerCase()){
        signEmail.classList.add("is-valid") 
        signEmail.classList.remove("is-invalid") 
        let repeat=document.getElementById("repeat");
        repeat.classList.remove("d-none");
        return true;
    }
}
}

function clearForm(){
    signupName =null;
    signEmail = null;
    signPass =null;
    // signupName.classList.remove("is-valid")
    // signEmail.classList.remove("is-valid")
    // signPass.classList.remove("is-valid")

}


function validationName(){
   let text=signupName.value;
   let regex=/^[a-zA-Z0-9]{3,15}$/
   if(regex.test(text)){
    error.classList.add("d-none");
    signupName.classList.add("is-valid")
    signupName.classList.remove("is-invalid")
    return true;
   }
   else{
    error.classList.remove("d-none");
    signupName.classList.remove("is-valid")
    signupName.classList.add("is-invalid")
    return false
   }
}

function validationEmail(){
    let text=signEmail.value;
    let regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    if(regex.test(text)){
     error.classList.add("d-none");
     signEmail.classList.add("is-valid")
     signEmail.classList.remove("is-invalid")
     return true;
    }
    else{
     error.classList.remove("d-none");
     signEmail.classList.remove("is-valid")
     signEmail.classList.add("is-invalid")
     return false
    }
 }

 function validationPass(){
  let text=signPass.value;
  let regex=/^[a-zA-Z0-9]{3,15}$/
  if(regex.test(text)){
   error.classList.add("d-none");
   signPass.classList.add("is-valid")
   signPass.classList.remove("is-invalid")
   return true;
  }
  else{
   error.classList.remove("d-none");
   signPass.classList.remove("is-valid")
   signPass.classList.add("is-invalid")
   return false
  }
}