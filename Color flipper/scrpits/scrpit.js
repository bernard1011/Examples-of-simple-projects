const colors = ["green", "yellow", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click',  () => {
    //get random number 0 - 3
    const randomNumber = getNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getNumber() {
    return Math.floor(Math.random() * colors.length);
}