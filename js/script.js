 "use strict";

function addWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
addWebP(function (support) {
    if (support == true) {
        document.querySelector(`body`).classList.add(`webp`);
    }
    
})

/* document.querySelector('a').addEventListener('click',e=>e.preventDefault()) */

document.body.addEventListener('submit',e=>e.preventDefault())


{////// Burger
const burger = document.querySelector(`.burg`)
const burgerMenu = document.querySelector(burger.dataset.target)
burger.addEventListener(`click`,(e)=>{
    e.preventDefault();
    burger.classList.toggle(`open`)
    burgerMenu.classList.toggle(`show`)
    if(burger.classList.contains(`open`)){
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }
})

function overflowControl() {
    if(document.body.offsetWidth < 425 && burger.classList.contains(`open`)){
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
        burger.classList.remove(`open`)
        burgerMenu.classList.remove(`show`)
    }
}


window.onresize = function() {
    overflowControl()
}
}



//////// scroll animation
{
    const elements = document.querySelectorAll('.animate')

    window.addEventListener('scroll',()=>{
        const screenCenter =  (window.innerHeight/2) + window.scrollY

        elements.forEach(el=>{
            if(el.getBoundingClientRect().y < screenCenter) {
                el.style.opacity = '1'
                switch(el.dataset.animate){
                    case 'from-left': el.classList.add('anim-from-left'); break;
                    case 'from-right': el.classList.add('anim-from-right'); break;
                }
            } else {
                el.style.opacity = '0'
                switch(el.dataset.animate){
                    case 'from-left': el.classList.remove('anim-from-left'); break;
                    case 'from-right': el.classList.remove('anim-from-right'); break;
                }
            }
        })

    })
}