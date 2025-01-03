const open = document.querySelector('.modal-btn');
const close = document.querySelector('.close-btn');
const overlay = document.querySelector('.modal-overlay');
open.addEventListener('click', ()=>{
    overlay.classList.add('open-modal');
    console.log(overlay.classList)
})

close.addEventListener('click', ()=>{
    overlay.classList.remove('open-modal');
    console.log(overlay.classList)
})