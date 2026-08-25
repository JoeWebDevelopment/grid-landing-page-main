

let menuButton = document.querySelector('button')
let buttonImg = document.querySelector('.menu-img')
let primaryNav = document.querySelector('.primary-nav')
let overlay = document.querySelector('.overlay')

let openMenuOrCloseMenu = ()=>{
    if(buttonImg.getAttribute("src") === "assets/images/icon-menu.svg"){
        primaryNav.classList.remove('hidden')
        menuButton.setAttribute('aria-expanded', 'true')
        menuButton.setAttribute('aria-label', 'Close menu')
        buttonImg.setAttribute('src', "assets/images/icon-close.svg")
        overlay.classList.remove('hidden')
    }
        else{
            primaryNav.classList.add('hidden')
           buttonImg.setAttribute('src', "assets/images/icon-menu.svg")
           menuButton.setAttribute('aria-expanded', 'false')
           overlay.classList.add('hidden')
           menuButton.setAttribute('aria-label', 'Open menu') 
        }
    }

document.addEventListener('keydown', function(event) {     if (event.key === 'Escape') {        
if(menuButton.getAttribute('aria-expanded') === "true"){
openMenuOrCloseMenu()
} else{
return;
}
  } });


overlay.addEventListener('click', () =>{
    openMenuOrCloseMenu()
})

menuButton.addEventListener('click', ()=>{
    openMenuOrCloseMenu()
})



