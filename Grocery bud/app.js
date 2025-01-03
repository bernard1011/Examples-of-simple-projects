const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElemnt;
let editFlag = false;
let editID = "";
// event listeners
// submit
form.addEventListener("submit", addItem);
// clear
clearBtn.addEventListener("click", clearItems);

//load items

window.addEventListener("DOMContentLoaded", setupItems);

// add item to the list
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("item");

    element.innerHTML = `<p class="title">${value}</p>
              <div class="btn-container">
                <button type="button" class="edit-btn">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button type="button" class="delete-btn">
                    <i class="fa-solid fa-trash"></i>
                </button>
              </div>`;
    list.appendChild(element);
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);

    displayAlert("item added to the list", "succes");
    container.classList.add("show-container");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElemnt.textContent = value;
    displayAlert("Edited", "succes");
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
//  set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
// clear all items
function clearItems() {
  const items = document.querySelectorAll(".item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// edit item function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement; // отримання елемента article
  editElemnt = e.currentTarget.parentElement.previousElementSibling; // отримання елементу <p>, який знаходиться на одному рівні з btn-container
  // set form value
  grocery.value = editElemnt.textContent;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

//delete item function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");
  setBackToDefault();

  removeFromLocalStorage(id);
}

// add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = JSON.parse(localStorage.getItem("list")) || [];
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = JSON.parse(localStorage.getItem("list")) || [];
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  console.log(items);
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = JSON.parse(localStorage.getItem("list")) || [];

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
/*
this meaning:
{
  id: id,
  value: value
}

*/

function setupItems() {
  let items = JSON.parse(localStorage.getItem('list'));
  if (items.length > 0){
  items.forEach((item)=>{
    createListItem(item.id, item.value);
  })
  }
  container.classList.add('show-container');
}



function createListItem(id, value) {
  const element = document.createElement("article");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("item");

  element.innerHTML = `<p class="title">${value}</p>
              <div class="btn-container">
                <button type="button" class="edit-btn">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button type="button" class="delete-btn">
                    <i class="fa-solid fa-trash"></i>
                </button>
              </div>`;
  list.appendChild(element);
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
}
