const optionGear = document.querySelector('#optionGear')
const optionsMenu = document.querySelector('.optionsMenu')

const optionMenu = () => {
    const openMenu = () => {

    }

    const closeMenu = () => {

    }
    return {openMenu, closeMenu}
}

optionGear.addEventListener('click', e => {
        e.target.style.transform = 'rotate(45deg)'
        optionsMenu.style.display = 'block'
        optionsMenu.style.opacity = '1'
    })