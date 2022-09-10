const cookieImg = document.querySelector('#cookie')
let clickIndex = 0

function animateCookie (cookie) {
    if (clickIndex == 0) {
        phadeOutText(titleText)
        clickCounterContainer.style.display = 'block'
    }
    cookie.style.transform = 'scale(1.05)'
    setTimeout(function getToNormalSize() {
        cookie.style.transform = 'scale(1)'
    },50)
    clickIndex += 1
    counter.updateCounter()
    
}

cookieImg.addEventListener('click', e => {
    animateCookie(cookieImg)

})