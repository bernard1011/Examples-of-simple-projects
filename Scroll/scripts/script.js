const date =document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const linksList = document.querySelector('.links');

navToggle.addEventListener('click', ()=>{
    // linksContainer.classList.toggle('show-links')
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    const linksListHeight = linksList.getBoundingClientRect().height;

    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksListHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }

})


const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');


window.addEventListener('scroll', ()=>{
const scrollHeight = window.scrollY;
const navHeight = navBar.getBoundingClientRect().height;
if(scrollHeight > navHeight) {
    navBar.classList.add('fixed-nav')
} else {
    navBar.classList.remove('fixed-nav')
}
console.log(window.scrollY);
})



window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})


const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        console.log(id);

        const element = document.getElementById(id);

        const navHeight = navBar.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        // if(!fixedNav) {
        //     position = position - navHeight;
        // }

        if(navHeight > 82){
            position = position + linksContainerHeight;
        }
        console.log(position)
        window.scrollTo({
            left:0,
            top: position,

        })
        linksContainer.style.height = 0;
    
    })
})