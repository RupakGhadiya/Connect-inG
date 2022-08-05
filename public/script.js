const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 3000);
})

function login() {
    window.location = "./login_signup/login.html";
}

function hire_now() {
    window.location = "./card/hirenow/card.html"
}
function sell_product(){
    window.location = "./form/Sell product/form2.html"
}
function Workers() {
    window.location = "./Job List/Jobs_tabs.html"
}
function Buy(){
    window.location = "./card/c2/card.html"
}
