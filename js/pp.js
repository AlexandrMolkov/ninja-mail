"use strict"






const srcPP =  'Ninjamail - Desktop.png'
const imgPP = document.createElement('img')
imgPP.classList.add('pp')
imgPP.src = srcPP
imgPP.style = `
    position: absolute;
    width: 100%;
    height: auto;
    opacity: 0.5;
`
document.querySelector('.wrapper').append(imgPP)

function hidePP() {
    imgPP.style.opacity = `0`;
}
function showPP() {
    imgPP.style.opacity = `0.5`;
}
function opacityPP(o) {
    imgPP.style.opacity = o;
}