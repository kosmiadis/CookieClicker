const counter = document.querySelector('#counter')
const clickCounterContainer = document.querySelector('div.click-count-container')

let counterIndex = 0

function updateCounter () {
    counter.textContent = counterIndex
    counterIndex++
    
}
