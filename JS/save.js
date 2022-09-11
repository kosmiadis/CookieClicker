const storeData = (() => {
    const saveCountsOnExit = () => {
        localStorage.setItem('COUNTERINDEX', JSON.stringify(COUNTERINDEX));
    }
    return {saveCountsOnExit}
})();

const loadData = (() => {
    const loadCounts = () => {
        //try to load countIndex if there is any
        try {
            COUNTERINDEX = JSON.parse(localStorage.COUNTERINDEX)
        }
        //if there is not any set it to 0
        catch (e) {
            let count = localStorage.setItem('COUNTERINDEX', 0)
            COUNTERINDEX = count 
        }
    }
    return {loadCounts}
})();


const clearData = (() => {
    const clearData = () => {
        localStorage.clear()
    }
    return {clearData}
})();




