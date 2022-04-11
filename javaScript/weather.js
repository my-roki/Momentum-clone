const tempertureIcon = document.querySelector(".temperture img");
const temperture = document.querySelector(".temperture span");
const city = document.querySelector("#weather div:last-child span");

function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${variable.API_KEY}&units=metric`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const weatherMain = data.weather[0].main;
      const weatherTemp = Math.round(data.main.temp);
      tempertureIcon.src = weatherIcon;
      temperture.innerText = `${weatherMain} ${weatherTemp}°`;
      city.innerText = data.name;
    });
}

function onGeoError(error) {
  alert("We cannot find your location!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
