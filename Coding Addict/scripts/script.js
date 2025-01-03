const menu = document.querySelector('.menu');

const navList = document.querySelector('.nav-list');

menu.addEventListener('click', ()=>{
    // if(navList.classList.contains('show-links')){
    //     navList.classList.remove('show-links')
    // } else {
    //     navList.classList.add('show-links')
    // }

    navList.classList.toggle("show-links")
})
