const showMore = document.querySelector('#show');
const contentToShow = document.querySelector('#cont');
const spanO = document.querySelectorAll('#spanO');
const spanT = document.querySelectorAll('#spanT');
const spanTh = document.querySelectorAll('#spanTh');
const liO = document.querySelector('#liO');
const liT = document.querySelector('#liT');
const liTh = document.querySelector('#liTh');
let count = 0;
const bree = {
  img: 'images/Bree-975f02dc03b8de3fd69f2b5f28437893.avif',
  name: 'Briana',
  comm: '"The energy she brings to <br />each lesson is amazing."',
  parag: '<span class="font-bold">Ismael</span><br />English learner on EnglishHouse'
};
const liv = {
  img: 'images/Liv-471717f87382729e5bacae5072ad556f.avif',
  name: 'Livinia',
  comm: '"With just a few lessons, you<br/>can already see the difference."',
  parag: '<span class="font-bold">Ismael</span><br />English learner on EnglishHouse'
};
const ash = {
  img: 'images/Ash-c8d8273fa488c713dd42b75e4109cd7c.avif',
  name: 'Ash',
  comm: '"The best choice I made for<br/>self-development in a long<br/>time."',
  parag: '<span class="font-bold">Ismael</span><br />English learner on EnglishHouse'
};



showMore.addEventListener('click', ()=>{
  if(!count) {
    show();
  } else {
    showLess();
  }
})




liT.addEventListener('click', ()=>{
    liO.innerHTML = '';
    liTh.innerHTML = '';
    // updateCard(liv);
    liT.innerHTML = `<span class="w-3 h-3 bg-purple-300 absolute z-10 -left-5 top-2" id="spanO"></span>`;
})
liO.addEventListener('click', ()=>{
    liT.innerHTML = '';
    liTh.innerHTML = '';
    // updateCard(bree);
    liO.innerHTML = `<span class="w-3 h-3 bg-purple-300 absolute z-10 -left-5 top-2" id="spanO"></span>`;
})
liTh.addEventListener('click', ()=>{
    liO.innerHTML = '';
    liT.innerHTML = '';
    // updateCard(ash)
    liTh.innerHTML = `<span class="w-3 h-3 bg-purple-300 absolute z-10 -left-5 top-2" id="spanO"></span>`;
})


function show() {
    contentToShow.classList.remove('hidden');
    showMore.innerHTML = `<span class="text-xl pr-[5px]">-</span>
          <span class="underline">Show more</span>`;
    count += 1;
}

function  showLess() {
     contentToShow.classList.add('hidden');
     showMore.innerHTML = `<span class="text-xl">+</span>
          <span class="underline">Show more</span>`;
     count -= 1;
}


function updateCard(tutor) {
    document.querySelector("#cards").innerHTML = ` <div class="relative">
                <img
                 
                  alt="imgTeacher"
                  class="w-[300px] rounded-md"
                  data-aos="fade-right"
                  data-aos-duration="500"
                />
                <img
                 
                  alt="imgTeacher"
                  class="w-[250px] absolute -z-10 top-8 right-20 rounded-md"
                  data-aos="fade-right"
                  data-aos-duration="750"
                />
                <img
                  
                  alt="imgTeacher"
                  class="w-[200px] absolute -z-20 top-16 right-40 rounded-md"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                />
                <div
                  class="absolute bottom-3 right-3 flex gap-2 pointer-events-none"
                >
                  <div class="bg-slate-100 rounded p-1 px-2">
                    <p class="text-sm">${tutor.name}</p>
                  </div>
                  <div class="bg-green-200 rounded p-1 px-2">
                    <p class="text-sm">English tutor</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-5" id="">
                <h3 class="font-bold text-2xl">
                  ${tutor.comm}
                </h3>
                <p class="text-xs leading-5">
                  ${tutor.parag}
                <ul class="list-disc flex gap-5 pl-4">
                  <li class="relative" id="liO"><span class="w-3 h-3 bg-purple-300 absolute z-10 -left-5 top-2" id="spanO"></span></li>
                  <li class="relative" id="liT"></li>
                  <li class="relative" id="liTh"></li>
                </ul>
              </div>`;
}