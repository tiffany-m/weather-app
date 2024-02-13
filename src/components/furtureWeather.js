import { updateFutureWeatherUI } from "./displayWeather";

function Day(date, condition, conditionIcon, minTemp, maxTemp) {
  (this.date = date),
    (this.condition = condition),
    (this.conditionIcon = conditionIcon),
    (this.minTemp = minTemp),
    (this.maxTemp = maxTemp);
}

export async function getFutureWeather(data) {
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
