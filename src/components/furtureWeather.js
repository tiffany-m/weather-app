import { fetchWeather } from "./fetchWeather";

let future = {
  date: document.querySelectorAll(".future-date"),
  condition: document.querySelectorAll(".future-condition"),
  conditionIcon: document.querySelectorAll(".future-condition-icon"),
  mintemp: document.querySelectorAll(".future-mintemp"),
  maxtemp: document.querySelectorAll(".future-maxtemp"),
};

console.log("future", future);

function Day(date, condition, conditionIcon, minTemp, maxTemp) {
  (this.date = date),
    (this.condition = condition),
    (this.conditionIcon = conditionIcon),
    (this.minTemp = minTemp),
    (this.maxTemp = maxTemp);
}

function updateFutureWeatherUI(arr) {
  arr.forEach((dayInfo, index) => {
    future.date[index].innerText = dayInfo.date;
    future.condition[index].innerText = dayInfo.condition;
    future.conditionIcon[index].src = dayInfo.conditionIcon;
    future.mintemp[index].innerText = Math.round(dayInfo.minTemp);
    future.maxtemp[index].innerText = Math.round(dayInfo.maxTemp);
  });
}

export async function getFutureWeather(location) {
  let data = await fetchWeather(location);
  let threeDayArr = [];

  for (let i = 0; i < 3; i++) {
    let dayInfo = new Day(
      data.forecast.forecastday[i].date,
      data.forecast.forecastday[i].day.condition.text,
      data.forecast.forecastday[i].day.condition.icon,
      data.forecast.forecastday[i].day.mintemp_f,
      data.forecast.forecastday[i].day.maxtemp_f,
    );

    threeDayArr.push(dayInfo);
  }

  updateFutureWeatherUI(threeDayArr);
}
