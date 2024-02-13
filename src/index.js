import "./style.css";
import appLogo from "./images/templogo.png";
import magnifyingGlass from "./images/search.png";
import { fetchWeather } from "./components/fetchWeather";

const submit = document.getElementById("submit");
const searchBar = document.getElementById("searchbar");
const logo = document.getElementById("logo");
const searchButton = document.querySelector(".search-btn-img");
let location = "Broomall";

logo.src = appLogo;
searchButton.src = magnifyingGlass;

fetchWeather(location);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  location = searchBar.value;
  searchBar.value = "";

  fetchWeather(location);
});
