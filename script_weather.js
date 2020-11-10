const apiKey = '82da4788641959ceead33ff6ea85a2c1';
const cityId = '524894';
const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;

function getWeather() {
  fetch(url)
  .then(response => {
     return response.json();
   })
  .then(function(data) {
    document.querySelector('.weatherCity').textContent = data.name;
    document.querySelector('.weatherDate').textContent = new Date();
    document.querySelector('.weatherForecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.weatherDesc').textContent = data.weather[0]['description'];
    document.querySelector('.weatherIcon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    
    //console.log(data);
    });
}
function showWeatherDiv() {
    weather.style.display = "block";
    weatherTimerStart();
  }
  function hideWeatherDiv() {
    weather.style.display = "none";
    weatherTimerStop();
  }
var weatherTimer;
function weatherTimerStart() {
  weatherTimer = setInterval(getWeather, 10000);
  getWeather();
}
function weatherTimerStop(){
  clearInterval(weatherTimer);
}
btnShowWeather.addEventListener("click", showWeatherDiv);
btnHideWeather.addEventListener("click", hideWeatherDiv);
upd.addEventListener("click", getWeather);
/*function weatherDiv() {
  if(weather.style.display == "none") {
    weather.style.display = "block";
    weatherTimerStart();
    btnShowWeather.innerHTML = "hide";
  } else {
    weather.style.display = "none";
    btnShowWeather.innerHTML = "show";
    weatherTimerStop();
  }
}
weatherDiv();*/
//setInterval(getWeather, 10000);
//getWeather();
//btnShowWeather.addEventListener("click", getWeather);


