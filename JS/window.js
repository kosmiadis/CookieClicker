
const appWindow = (() => {
    const saveDATA = () => {
        storeData.saveCountsOnExit()        
    }

    const loadDATA = () => {
        loadData.loadCounts()
        allTexts.animateText(pressCookieText)
    
    }
    return {saveDATA, loadDATA}
})()

window.addEventListener('unload', e => {
    appWindow.saveDATA()
})

window.addEventListener('load', e => {
    appWindow.loadDATA()
    window.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
            allTexts.phadeInText()
            allTexts.animateText()  
        }
    })

}) 


    

