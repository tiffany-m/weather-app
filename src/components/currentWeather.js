import { fetchWeather } from "./fetchWeather";

export async function getCurrentWeather(location) {
  let data = await fetchWeather(location);

  let current = {
    location: data.location.name,
    condition: data.current.condition.text,
    conditionIcon: data.current.condition.icon,
    tempature: data.current.temp_f,
  };

  console.log(
    "Current Weather",
    current.location,
    current.condition,
    current.conditionIcon,
    current.tempature,
  );
}
