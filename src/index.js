import "./style.css";
import tempLogo from "./images/templogo.png";
import { getCurrentWeather } from "./components/currentWeather";
import { getFutureWeather } from "./components/furtureWeather";


const logo = (document.getElementById("logo").src = tempLogo);




getCurrentWeather();
getFutureWeather();


