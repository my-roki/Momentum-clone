const botRightButton = document.getElementById("bottom-right");
const bars = document.getElementById("bars");
const botRigthCols = document.querySelectorAll(".bottom-right__column");

const toDoSide = document.querySelector("#todo-side");
const todoButton = document.querySelector("#todo-button");
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");

let toDoList = document.querySelector("#todo-list");

let toDoStorage = [];
function saveToDoStorage() {
  window.localStorage.setItem("ToDo", JSON.stringify(toDoStorage));
}

function openSideBar() {
  toDoSide.style.transform = "translateX(-16px)";
  todoButton.removeEventListener("click", openSideBar);
  todoButton.addEventListener("click", closeSideBar);
}

function closeSideBar() {
  toDoSide.style.transform = "translateX(100%)";
  todoButton.removeEventListener("click", closeSideBar);
  todoButton.addEventListener("click", openSideBar);
}

function createToDo(newTodoObj) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const spanContent = document.createElement("span");
  const spanEdit = document.createElement("span");
  const editIcon = document.createElement("i");
  const spanDelete = document.createElement("span");
  const deleteIcon = document.createElement("i");

  li.id = newTodoObj.id;
  spanContent.innerText = newTodoObj.text;
  editIcon.className = "fa-solid fa-pen-to-square";
  deleteIcon.className = "fa-solid fa-trash";

  spanEdit.appendChild(editIcon);
  spanDelete.appendChild(deleteIcon);
  div.appendChild(spanEdit);
  div.appendChild(spanDelete);
  li.appendChild(spanContent);
  li.appendChild(div);

  toDoList.appendChild(li);
  spanDelete.addEventListener("click", deleteToDo);
  spanEdit.addEventListener("click", editTodo);
}

function deleteToDo(event) {
  const li = event.target.parentElement.parentElement.parentElement;
  li.remove();
  toDoStorage = toDoStorage.filter((todo) => todo.id != parseInt(li.id));
  saveToDoStorage();
}

function editTodo(event) {
  const li = event.target.parentElement.parentElement.parentElement;
  const span = li.querySelector("span");
  const div = li.querySelector("div");

  span.remove();
  div.remove();

  const newForm = document.createElement("form");
  newForm.id = "new-form";

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.classList.add("edit-input");
  newInput.value = span.innerText;

  const newDiv = document.createElement("div");
  const newEdit = document.createElement("span");
  const newEditIcon = document.createElement("i");
  const newCancel = document.createElement("span");
  const newCancelIcon = document.createElement("i");

  newEditIcon.className = "fa-solid fa-pen-to-square";
  newCancelIcon.className = "fa-solid fa-xmark";

  newEdit.appendChild(newEditIcon);
  newCancel.appendChild(newCancelIcon);
  newDiv.appendChild(newEdit);
  newDiv.appendChild(newCancel);
  newForm.appendChild(newInput);
  newForm.appendChild(newDiv);
  li.appendChild(newForm);

  newCancel.addEventListener("click", (event) => {
    newForm.remove();
    li.appendChild(span);
    li.appendChild(div);
  });

  newEdit.addEventListener("click", handleUpdate);
  newForm.addEventListener("submit", handleUpdate);
}

function handleUpdate(event) {
  event.preventDefault();
  console.log("Update Function Will be updated");
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

const savedToDo = localStorage.getItem("ToDo");
if (savedToDo) {
  const initialToDo = JSON.parse(savedToDo);
  toDoStorage = initialToDo;
  initialToDo.forEach(createToDo);
}

botRightButton.addEventListener("mousemove", () => {
  bars.classList.add("hidden");
  botRigthCols.forEach((col) => {
    col.classList.remove("hidden");
  });
});

botRightButton.addEventListener("mouseleave", () => {
  bars.classList.remove("hidden");
  botRigthCols.forEach((col) => {
    col.classList.add("hidden");
  });
});

todoButton.addEventListener("click", openSideBar);
toDoForm.addEventListener("submit", handleToDoInput);
