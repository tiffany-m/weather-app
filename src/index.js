import "./style.css";
import tempLogo from "./images/templogo.png";

const url = "http://api.weatherapi.com/v1";
const key = "496b725833e846e7b01194420243101";
let location = "Broomall";
const logo = (document.getElementById("logo").src = tempLogo);

function Day(condition, conditionIcon, minTemp, maxTemp) {
  (this.condition = condition),
    (this.conditionIcon = conditionIcon),
    (this.minTemp = minTemp),
    (this.maxTemp = maxTemp);
}

async function fetchWeather() {
  //location = document.getElementById('seachBar');
  try {
    const response = await fetch(
      `${url}/forecast.json?key=${key}&q=${location}&days=7`,
    );

    if (response.status === 200) {
      let responseParsed = await response.json();
      // console.log("Success:", responseParsed);

      return responseParsed;
    } else {
      console.log("Server Error:", data.error.message);
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function getCurrentWeater() {
  let data = await fetchWeather();

  let current = {
    location: data.location.name,
    condition: data.current.condition.text,
    conditionIcon: data.current.condition.icon,
    tempature: data.current.temp_f,
  };

  // console.log(
  //   "Current Weather",
  //   current.location,
  //   current.condition,
  //   current.conditionIcon,
  //   current.tempature,
  // );
}

async function getFutureWeater() {
  let data = await fetchWeather();
  let threeDayArr = [];
  let day = {};

  for (let i = 0; i < 3; i++) {
    let dayInfo = new Day(
      data.forecast.forecastday[i].day.condition.text,
      data.forecast.forecastday[i].day.condition.icon,
      data.forecast.forecastday[i].day.mintemp_f,
      data.forecast.forecastday[i].day.maxtemp_f,
    );

    threeDayArr.push(dayInfo)
  }

  console.log(threeDayArr)
}

fetchWeather();
getCurrentWeater();
getFutureWeater();


