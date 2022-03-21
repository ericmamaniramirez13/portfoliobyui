//Provo = 5780026
//Rexburg = 5605242
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5780026&appid=7c2e05c628cc9aec56f563d671e199d9";
fetch(apiURL).then((response) => response.json()).then((jsObject) => {
  console.log(jsObject);
  const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  const temp = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(1);
  const weatherDesc = jsObject.weather[0].description;
  const windSpeed = jsObject.wind.speed;
  const windChill = Math.round(35.74 + 0.6215 * temp - 35.75 * (Math.pow(windSpeed, 0.16)) + 0.4275 * temp * (Math.pow(windSpeed, 0.16)));
  //35.74 + 0.6215×T - 35.75×V0.16 + 0.4275×T×V0.16
  document.querySelector('#current-temp').textContent = temp+"°F";
  document.querySelector('#weathericon').setAttribute('src', iconsrc);
  document.querySelector('#weathericon').setAttribute('alt', weatherDesc);
  document.querySelector('#condition').textContent = weatherDesc;
  document.querySelector('#wind-speed').textContent = windSpeed + " Mph";
  document.querySelector('#wind-chill').textContent = windChill;
});

/*fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(1);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const windspeed = jsObject.wind.speed
    console.log(windspeed)
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#figcaption').textContent = desc;
    document.querySelector('#windspeed').textContent += windspeed;
  });*/