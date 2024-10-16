// GENERTING CODE

// `<div class="bg-white text-gray-800 border-2 border-gray-300 rounded-3xl w-80 flex justify-between p-3 text-xl">
//   <p>${toDoList[i]}</p>
//   <div class="btn-container">
//   <button><i class="fa-regular fa-pen-to-square text-gray-500"></i></button>
//  <button><i class="fa-solid fa-xmark text-gray-500 close"></i></button>   </div>
//   </div>`

const doBtn = document.querySelector(".doBtn");
let toDoList = [];
const input = document.querySelector(".textInput");

renderList()
function addItem() {
  const dateDue = document.querySelector('.dueDate');
  if (input.value) {
    toDoList.push({name: input.value,
      dueDate: dateDue.value
    });
    input.value = "";
    dateDue.value = "";
    console.log(toDoList);
    renderList();
    document.querySelector('.text').classList.add('hidden');
  }
}


function renderList() {

  let htmlList = "";
  for (let i = 0; i < toDoList.length; i++) {
    htmlList += `<div class="bg-white text-gray-800 border-2 border-gray-300 rounded-3xl w-80 md:w-[700px] flex justify-between gap-5 p-3 text-xl">
    <div class="flex justify-between items-center w-full">
    <p>${toDoList[i].name}</p><p><span class="text-gray-400 pl-3 text-lg">${toDoList[i].dueDate}</span></p>
    </div>
 <div class="btn-container flex gap-3">
 
<button onclick="toDoList.splice(${i});
                  renderList();
"><i class="fa-solid fa-xmark text-gray-500 close"></i></button>   </div>
 </div>`;
  }
  document.querySelector(".toDoList").innerHTML = htmlList;
  if(toDoList.length <= 0) {
    document.querySelector(".text").classList.remove("hidden");
  }
}

doBtn.addEventListener("click", addItem);

input.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter') {addItem()};
})




