// MODAL

let modal = document.querySelector(".modal") 
console.log(modal)

function closeModal () {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

function openModal () {
    modal.classList.remove("hide");
    modal.classList.add("show");
}

modal.addEventListener("click", function(e) {
    if (e.target ==  modal) {
        closeModal()
    }
})

function showModalByScroll () {
    if (window.pageYOffset > (document.body.scrollHeight/2)) {
        openModal();
        window.removeEventListener("scroll",showModalByScroll);
    }
}

window.addEventListener("scroll", showModalByScroll);

// MOBILE MENU

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
})

// SEND FORM
let btnOpenForm = document.querySelector(".btn-contact");
let btnOpenForm1 = document.querySelector(".btn-contact1");
let sendForm = document.querySelector(".send-form");
let display = document.querySelector(".no-display");
let noDisplay = document.querySelector(".display")

btnOpenForm.addEventListener("click", function(){
        sendForm.classList.toggle("display");
        btnOpenForm.classList.toggle("no-display");
        btnOpenForm1.classList.toggle("display");
})

btnOpenForm1.addEventListener("click", function(){
    sendForm.classList.toggle("display");
    btnOpenForm.classList.toggle("no-display");
    btnOpenForm1.classList.toggle("display");
})

