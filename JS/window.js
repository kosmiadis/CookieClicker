
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
    console.log('loaded')
    window.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
            console.log('it works')
            allTexts.phadeInText()
            allTexts.animateText()  
        }
    })

}) 


    

