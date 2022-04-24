//TODO: make CRUD system.
const sideBar = document.querySelector("#jsSide");
const todoButton = document.querySelector("#todo-form span");

const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDoStorage = [];
function saveToDoStorage() {
  window.localStorage.setItem("ToDo", JSON.stringify(toDoStorage));
}

function createToDo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = newTodoObj.id;
  span.innerText = newTodoObj.text;
  button.innerText = "✘";

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);

  button.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoStorage = toDoStorage.filter((todo) => todo.id != parseInt(li.id));
  saveToDoStorage();
}

function handleToDoInput(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = { id: Date.now(), text: newToDo };
  createToDo(newTodoObj);

  toDoStorage.push(newTodoObj);
  saveToDoStorage();
}

toDoForm.addEventListener("submit", handleToDoInput);

const savedToDo = localStorage.getItem("ToDo");
if (savedToDo) {
  const initialToDo = JSON.parse(savedToDo);
  toDoStorage = initialToDo;
  initialToDo.forEach(createToDo);
}

function openSideBar() {
  sideBar.style.transform = "translateX(-12px)";
  todoButton.removeEventListener("click", openSideBar);
  todoButton.addEventListener("click", closeSideBar);
}
function closeSideBar() {
  sideBar.style.transform = "translateX(100%)";
  todoButton.removeEventListener("click", closeSideBar);
  todoButton.addEventListener("click", openSideBar);
}

todoButton.addEventListener("click", openSideBar);
