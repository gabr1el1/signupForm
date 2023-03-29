const themeToggle = document.querySelector(".theme-icon");
const rootElement = document.querySelector("html");
themeToggle.addEventListener("click",function(){
    if(rootElement.className=="dark-theme"){
        rootElement.className="light-theme";
        themeToggle.innerText = "dark_mode";
    }else{
        rootElement.className="dark-theme";
        themeToggle.innerText = "light_mode";
    }
});