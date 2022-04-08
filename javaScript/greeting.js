const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);

  greeting.innerText = `Hello ${username}!!`;

  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
}

const savedUserName = localStorage.getItem("username");
if (savedUserName) {
  username = localStorage.getItem("username");
  greeting.innerText = `Hello ${username}!!`;
  greeting.classList.remove("hidden");
} else {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
}
