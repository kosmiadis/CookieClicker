window.addEventListener('unload', e => {
    storeData.saveCountsOnExit()
})

window.addEventListener('load', e => {
    loadData.loadCounts()
})

window.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
        
    }
})