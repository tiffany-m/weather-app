import { updateCurrentWeatherUI } from "./displayWeather";

export async function getCurrentWeather(data) {
  let current = {
    location: data.location.name,
    condition: data.current.condition.text,
    conditionIcon: data.current.condition.icon,
    temp: data.current.temp_f,
  };

  updateCurrentWeatherUI(current);
}
