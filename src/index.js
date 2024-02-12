import "./style.css";
import appLogo from "./images/templogo.png";
import magnifyingGlass from "./images/search.png";
import { getCurrentWeather } from "./components/currentWeather";
import { getFutureWeather } from "./components/furtureWeather";

const submit = document.getElementById("submit");
const searchBar = document.getElementById("searchbar");
let location = "Broomall";

const logo = document.getElementById("logo");
logo.src = appLogo;
const searchButton = document.getElementById("search-btn");
searchButton.src = magnifyingGlass;

getCurrentWeather(location);
getFutureWeather(location);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  location = searchBar.value;
  searchBar.value = "";

  getCurrentWeather(location);
  getFutureWeather(location);
});
