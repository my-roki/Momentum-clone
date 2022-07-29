// TODO: how to get file list?
const images = [
  "sample1.jpg",
  "sample2.jpg",
  "sample3.jpg",
  "sample4.jpg",
  "sample5.jpg",
];
const backgroundImage = document.createElement("img");
const imageButton = document.querySelector("#changbg-button");

function changeBackground() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  backgroundImage.id = "background_image";
  backgroundImage.src = `image/${chosenImage}`;
  document.body.appendChild(backgroundImage);
}

changeBackground();
imageButton.addEventListener("click", changeBackground);
