import './style/index.sass'

const burger = document.querySelector(['.burger'])
const menu = document.getElementById("menu-list")

burger.addEventListener('click',()=>{
    menu.classList.contains('active')?menu.classList.remove('active'):menu.classList.add('active')
})
