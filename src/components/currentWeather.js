import { fetchWeather } from "./fetchWeather";

let currentLocation = document.querySelector('.current-location');
let currentCondition = document.querySelector(".current-condition");
let currentConditionIcon = document.querySelector(".current-condition-icon");
let currentTemp = document.querySelector(".current-temp");

function updateCurrentWeatherUI(obj) {
  currentLocation.innerText = obj.location;
  currentCondition.innerText = obj.condition;
  currentConditionIcon.src = obj.conditionIcon;
  currentTemp.innerText = Math.round(obj.temp);
}

export async function getCurrentWeather(location) {
  let data = await fetchWeather(location);

  let current = {
    location: data.location.name,
    condition: data.current.condition.text,
    conditionIcon: data.current.condition.icon,
    temp: data.current.temp_f,
  };

  updateCurrentWeatherUI(current);
}

