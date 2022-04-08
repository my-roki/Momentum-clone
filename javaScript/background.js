// TODO: how to get file list?
const images = ["cat1.jpg", "cat2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.createElement("img");

backgroundImage.src = `image/${chosenImage}`;
document.body.appendChild(backgroundImage);
