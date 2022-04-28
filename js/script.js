let burger = document.querySelector(".header__burger")
let burgerMenu = document.querySelector(".header__burger_list")
let body = document.querySelector("body")
burger.addEventListener("click", function(){
    burger.classList.toggle("header__burger_active")
    burgerMenu.classList.toggle("header__burger_list_active")
    body.classList.toggle("lock")
})


window.addEventListener("scroll", function(){
    if (scrollY >= 100) {
        document.querySelector(".header").classList.add("header_active")
    } else {
        document.querySelector(".header").classList.remove("header_active")
    }
})