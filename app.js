let modal = document.querySelector(".modal") 
console.log(modal)

window.addEventListener("scroll", function(){
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(windowScroll)
    console.log(windowHeight)
    if ((windowHeight / 2) < windowScroll) {
        modal.classList.add("show");
    }
}) 

function closeModal () {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click", function(e) {
    if (e.target ==  modal) {
        closeModal()
    }
})