

let menuButton = document.querySelector('button')
let buttonImg = document.querySelector('.menu-img')
let primaryNav = document.querySelector('.primary-nav')
let main = document.querySelector('main')
let overlay = document.querySelector('.overlay')

let OpenMenuOrCloseMenu = ()=>{
    if(buttonImg.getAttribute("src") === "assets/images/icon-menu.svg"){
        primaryNav.classList.remove('hidden')
        menuButton.setAttribute('aria-expanded', 'true')
        buttonImg.setAttribute('src', "assets/images/icon-close.svg")
        overlay.classList.remove('hidden')
    }
        else{
            primaryNav.classList.add('hidden')
           buttonImg.setAttribute('src', "assets/images/icon-menu.svg")
           menuButton.setAttribute('aria-expanded', 'false')
           overlay.classList.add('hidden') 
        }
    }



menuButton.addEventListener('click', ()=>{
    OpenMenuOrCloseMenu()
})



