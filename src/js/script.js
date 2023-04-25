//Substituindo alguns dos hovers
let logoMarvel = document.querySelector('.logo-marvel')
let spider = document.querySelector('.spider')

logoMarvel.addEventListener('mouseenter', () => {
    logoMarvel.style.transform = 'translateY(-2px)'
})

logoMarvel.addEventListener('mouseleave', () => {
    logoMarvel.style.transform = 'none'
})

spider.addEventListener('mouseenter', () => {
    spider.style.transform = 'translateY(-2px)'
})

spider.addEventListener('mouseleave', () => {
    spider.style.transform = 'none'
})

//menu-mobile
let iconMenuMobile = document.querySelector('.icon-menu-mobile')
let icon = iconMenuMobile.querySelector('.bx')
let nClasses = iconMenuMobile.classList
let menuMobile = document.querySelector('.menu-mobile')

iconMenuMobile.addEventListener('click', (e) => {
    if (nClasses.length == 1) {
        iconMenuMobile.classList.add('ativo')
        icon.classList.remove('bx-menu-alt-right')
        icon.classList.add('bx-x')
        menuMobile.style.padding = '20px'
        menuMobile.style.height = '100%'
        menuMobile.style.transition = 'all .50s ease'
    } else {
        iconMenuMobile.classList.remove('ativo')
        icon.classList.remove('bx-x')
        icon.classList.add('bx-menu-alt-right')
        menuMobile.style.padding = '0'
        menuMobile.style.height = '0'
        menuMobile.style.transition = 'all .15s ease'
    }
})