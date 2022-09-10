let COUNTERINDEX
const clickCounterContainer = document.querySelector('div.click-count-container')



const counter = (() => {
    let CounterDiv = document.querySelector('#counter')    
    const updateCounter = () => {
        CounterDiv.textContent = COUNTERINDEX
        COUNTERINDEX++
    }

    const loadCounts = () => {
        //try to load countIndex if there is any
        try {
            COUNTERINDEX = JSON.parse(localStorage.getItem('COUNTERINDEX'))
        }
        //if there is not any set it to 0
        catch (e) {
            let count = localStorage.setItem('COUNTINDEX', 0)
            COUNTERINDEX = count 
        }
    }
    return {CounterDiv, updateCounter, loadCounts}
})();

