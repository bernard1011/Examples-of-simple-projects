const menuOpen = document.querySelector('.sidebar-toggle');
const menuClose = document.querySelector('.close-btn');
const menu = document.querySelector('.sidebar')

menuOpen.addEventListener('click', ()=>{
    menu.classList.toggle("show-sidebar")
})

menu.addEventListener('click', ()=>{
    menu.classList.remove("show-sidebar")
})