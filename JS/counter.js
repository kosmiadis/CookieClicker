let COUNTERINDEX = 0
const clickCounterContainer = document.querySelector('div.click-count-container')
let CounterDiv = document.querySelector('#counter') 
const counter = (() => {
    
    const updateCounter = () => {
        CounterDiv.textContent = COUNTERINDEX
        COUNTERINDEX++
    }

    const resetCounter = () => {
        COUNTERINDEX = 0
        storeData.saveCountsOnExit()
    }
    return {updateCounter, resetCounter}
})();

