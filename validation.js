const passInput = document.querySelector("#password");
const confPassInput = document.querySelector("#confirm-password");
const alertPassword = document.querySelector(".alert");
const form = document.querySelector("#form-signup");
let passValid;
passInput.addEventListener('input',validatePassword);
confPassInput.addEventListener('input',validatePassword);
form.addEventListener("submit",validate);

function validate(event){
    if(!passValid){
        event.preventDefault();
    }
}
function validatePassword(){
    if(passInput.value.trim()!==confPassInput.value.trim()){
        passInput.classList.add("error");
        confPassInput.classList.add("error");
        alertPassword.innerText="Password must be the same";
        passValid=false;
    }else{
        passInput.classList.remove("error");
        confPassInput.classList.remove("error");
        alertPassword.innerText="";
        passValid=true;
    }
}


