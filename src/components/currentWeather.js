import { fetchWeather } from "./fetchWeather";
import { updateCurrentWeatherUI }  from "./displayWeather"

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

