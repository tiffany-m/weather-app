import { getCurrentWeather } from "./currentWeather";
import { getFutureWeather } from "./furtureWeather";

const url = "http://api.weatherapi.com/v1";
const key = "496b725833e846e7b01194420243101";

export async function fetchWeather(location) {
  try {
    const response = await fetch(
      `${url}/forecast.json?key=${key}&q=${location}&days=7`,
    );

    if (response.status === 200) {
      let responseParsed = await response.json();

      getCurrentWeather(responseParsed);
      getFutureWeather(responseParsed);
    } else {
      alert("Please enter valid city name.");
      console.log("App has Server Error");
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
