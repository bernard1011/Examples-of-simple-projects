const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h3");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();



const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);



// let futureDate = new Date(2024, 3, 24, 11, 30);
const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on  ${weekday}, ${date} ${months[month]} ${year} ${hours}:${minutes}`;

const futureTime = futureDate.getTime();

function getRemeiningTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  //values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  //calculate all values
  const day = Math.floor(t / oneDay);
  const hour = Math.floor((t % oneDay) / oneHour);
  const minute = Math.floor((t % oneHour) / oneMinute);
  const sec = Math.floor((t % oneMinute) / 1000);

  //set values array
  const values = [day, hour, minute, sec];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach((item, index) => {
    item.textContent = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h3 class="expired">Sorry, this giveaway has expired</h3>`;
  }
}
//countdown
let countdown = setInterval(getRemeiningTime, 1000);
//set initial values
getRemeiningTime();
