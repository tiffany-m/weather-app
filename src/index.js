import "./style.css";
import tempLogo from "./images/templogo.png";
import { getCurrentWeather } from "./components/currentWeather";
import { getFutureWeather } from "./components/furtureWeather";

const submit = document.getElementById("submit");
const searchBar = document.getElementById("searchbar");
let location = "Broomall";

console.log(searchBar.value)

const logo = document.getElementById("logo");
logo.src = tempLogo;

getCurrentWeather(location);
getFutureWeather(location);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  location = searchBar.value;

  getCurrentWeather(location);
  getFutureWeather(location);
});
