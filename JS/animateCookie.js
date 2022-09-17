const cookieImg = document.querySelector('#cookie')
let clickIndex = 0


const cookie = (() => {

    const animateCookie = (cookie) => {
        if (clickIndex == 0) {
            allTexts.phadeOutText(titleText)
            clickCounterContainer.style.display = 'block'
        }
        cookie.style.transform = 'scale(1.05)'
        setTimeout(function getToNormalSize() {
            cookie.style.transform = 'scale(1)'
        },50)
        if (clickIndex === 1) {
        }
        else {
            clickIndex++
        }
    }

    const increamentCounter = () => {
        counter.updateCounter()
    }
    return {animateCookie, increamentCounter}
})();


cookieImg.addEventListener('click', e => {
    cookie.animateCookie(cookieImg)
    cookie.increamentCounter()
})