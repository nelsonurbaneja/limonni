const down = document.getElementById('down')
const toggleVertical = document.getElementById('toggleVertical')
const logo = document.getElementById('logo')

toggleVertical.addEventListener('click', e=> {
    down.classList.toggle('icon-up-open-big')
    down.classList.toggle('icon-down-open-big')
})

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)
    if(toggle && nav) {
        toggle.addEventListener('click', e => {
            nav.classList.toggle('showMenu')
        })
    }
}

showMenu('toggle', 'menu')


const comprobarAncho = e => {
    if(window.innerWidth >= 680) {
       logo.setAttribute("src","./img/logo.png" )
    }else {
        logo.setAttribute("src","./img/logoMobile.png" )
    }
}

comprobarAncho()

window.addEventListener('resize', e => {
    comprobarAncho()
})













