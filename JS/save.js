const storeData = (() => {
    const saveCountsOnExit = () => {
        localStorage.setItem('COUNTINDEX', JSON.stringify(COUNTERINDEX));
    }
    return {saveCountsOnExit}
})

const SAVE = storeData()

document.addEventListener('unload', e => {
    SAVE.saveCountsOnExit()
})

document.addEventListener('load', e => {
    counter.loadCounts()
})