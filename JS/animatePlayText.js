const pressCookieText = document.querySelector('#animated-text')
const titleText = document.querySelector('#cookie-clicker-title')
const contactDiv = document.querySelector('.contact')

function animateText (text) {
    text.style.opacity = '0.2'
    setTimeout(function setOpacityToDefault () {
        text.style.opacity = '1'
    }, 400)
}

setInterval(function animate () {
    animateText(pressCookieText)
}, 1500)

function phadeOutText (title) {
    pressCookieText.style.display = 'none'
    title.style.display = 'none'
    contactDiv.style.display = 'none'
    
}

