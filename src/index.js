// https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london
// https://www.weatherapi.com/docs/

const url = "http://api.weatherapi.com/v1";
const key = "496b725833e846e7b01194420243101";
// let location = document.getElementById('seachBar')
let location = "Broomall";

async function getWeather() {
  const response = await fetch(`${url}/forecast.json?key=${key}&q=${location}&days=7`);
  const data = await response.json();
  console.log(data);
}

getWeather();
