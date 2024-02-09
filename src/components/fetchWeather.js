const url = "http://api.weatherapi.com/v1";
const key = "496b725833e846e7b01194420243101";


export async function fetchWeather(location) {
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