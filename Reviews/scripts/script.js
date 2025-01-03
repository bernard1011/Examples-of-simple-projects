const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web development",
        img: "../images/1.jpg",
        text: `Im baby meggings twee health goth +1. 
        Bicycle rights tumeric charteuse before they sold out chambray pop-up. Shaman humblebrag pickied coloring book salvia hoodie,
        cold-pressed four dollar toast everyday carry`
    },

    {
        id: 2,
        name: "woody",
        job: "traveler",
        img: "../images/2.jpg",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },

    {
        id: 3,
        name: "spider man",
        job: "super hero",
        img: "../images/3.jpg",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    }
]

let img = document.querySelector('img');
let nameId = document.querySelector('.name');
let job = document.querySelector('.profession');
let description = document.querySelector('.description');

const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');

const surprise = document.querySelector('.random')

let currentItem = 0;


window.addEventListener('DOMContentLoaded', () => {
   showPerson(currentItem);
})

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})

prevBtn.addEventListener('click', () => {
currentItem--;
if(currentItem < 0 ) {
    currentItem = reviews.length - 1;
}
showPerson();
})



function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img
    nameId.textContent = item.name;
    job.textContent = item.job;
    description.textContent = item.text;
}

surprise.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * 3);
showPerson(currentItem);
})