import { format, parseISO } from "date-fns";

let currentLocation = document.querySelector(".current-location");
let currentCondition = document.querySelector(".current-condition");
let currentConditionIcon = document.querySelector(".current-condition-icon");
let currentTemp = document.querySelector(".current-temp");
let future = {
  date: document.querySelectorAll(".future-date"),
  condition: document.querySelectorAll(".future-condition"),
  conditionIcon: document.querySelectorAll(".future-condition-icon"),
  mintemp: document.querySelectorAll(".future-mintemp"),
  maxtemp: document.querySelectorAll(".future-maxtemp"),
};

export function updateCurrentWeatherUI(obj) {
  currentLocation.innerText = obj.location;
  currentCondition.innerText = obj.condition;
  currentConditionIcon.src = obj.conditionIcon;
  currentTemp.innerText = `Temp ${Math.round(obj.temp)}°F`;
}

export function updateFutureWeatherUI(arr) {
  arr.forEach((dayInfo, index) => {
    let conditionPhrase = dayInfo.condition;
    let conditionWords = conditionPhrase.split(" ");

    for (let i = 0; i < conditionWords.length; i++) {
      if (conditionWords[i]) {
        // Check if word is undefined to prevent error. Phrase "Partly cloudy" had an extra space at end.
        conditionWords[i] =
          conditionWords[i][0].toUpperCase() + conditionWords[i].substr(1);
      }
    }

    conditionPhrase = conditionWords.join(" ");

    future.date[index].innerText = format(parseISO(dayInfo.date), "MM/dd/yyyy");
    future.condition[index].innerText = conditionPhrase;
    future.conditionIcon[index].src = dayInfo.conditionIcon;
    future.mintemp[index].innerText = `Low ${Math.round(dayInfo.minTemp)}°F`;
    future.maxtemp[index].innerText = `High ${Math.round(dayInfo.maxTemp)}°F`;
  });
}
