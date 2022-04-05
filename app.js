const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const activeClass = "active";

  // //   toggle
  //   if (h1.classList.contains(activeClass)) {
  //     h1.classList.remove(activeClass);
  //   } else {
  //     h1.classList.add(activeClass);
  //   }

  h1.classList.toggle(activeClass);
}

h1.addEventListener("click", handleTitleClick);
