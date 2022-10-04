const pressCookieText = document.querySelector('#animated-text')
const titleText = document.querySelector('#cookie-clicker-title')
const contactDiv = document.querySelector('.contactDiv')

const allTexts = (() => {
    const animateText = (text) => {
        text.style.opacity = '0.2'
        setTimeout(function setOpacityToDefault () {
            text.style.opacity = '1'
        }, 400)
    }

    const startAnimation = () => {
        setInterval(function animate () {
        animateText(pressCookieText)
        }, 1500)
    }

    const phadeOutText = () => {
        pressCookieText.style.display = 'none'
        titleText.style.display = 'none'
        contactDiv.style.display = 'none'    
        CounterDiv.style.display = 'block'
        clickCounterContainer.style.display = 'block'
    }

    const phadeInText = () => {
        if (clickIndex === 1) {
            clickIndex = 0
        }
        clickCounterContainer.style.display = 'none'
        CounterDiv.style.display = 'none'
        pressCookieText.style.display = 'block'
        titleText.style.display = 'block'
        contactDiv.style.display = 'block'  
        
    
    }
    return {animateText, startAnimation, phadeOutText, phadeInText}
})();



