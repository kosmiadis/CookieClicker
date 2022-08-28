const cookieImg = document.querySelector('#cookie')

function animateCookie (cookie) {
    cookie.style.transform = 'scale(1.05)'
    setTimeout(function getToNormalSize() {
        cookie.style.transform = 'scale(1)'
    },50)
}

cookieImg.addEventListener('click', e => {
    animateCookie(cookieImg)

})