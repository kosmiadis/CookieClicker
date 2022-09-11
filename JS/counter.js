let COUNTERINDEX = 0
const clickCounterContainer = document.querySelector('div.click-count-container')

const counter = (() => {
    let CounterDiv = document.querySelector('#counter') 
    const updateCounter = () => {
        CounterDiv.textContent = COUNTERINDEX
        COUNTERINDEX++
    }
    return {CounterDiv, updateCounter}
})();

