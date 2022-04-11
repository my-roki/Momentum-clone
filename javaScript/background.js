// TODO: how to get file list?
const images = [
  "sample1.jpg",
  "sample2.jpg",
  "sample3.jpg",
  "sample4.jpg",
  "sample5.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.createElement("img");

backgroundImage.id = "background_image";
backgroundImage.src = `image/${chosenImage}`;
document.body.appendChild(backgroundImage);
