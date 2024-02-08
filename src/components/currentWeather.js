import { fetchWeather } from "./fetchWeather";

export async function getCurrentWeather() {
  let data = await fetchWeather();

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
