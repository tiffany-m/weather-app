/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london\r\n// https://www.weatherapi.com/docs/\r\n\r\nconst url = \"http://api.weatherapi.com/v1\";\r\nconst key = \"496b725833e846e7b01194420243101\";\r\n// let location = document.getElementById('seachBar')\r\nlet location = \"Broomall\";\r\n\r\nasync function getWeather() {\r\n  const response = await fetch(`${url}/forecast.json?key=${key}&q=${location}&days=7`);\r\n  const data = await response.json();\r\n  console.log(data);\r\n}\r\n\r\ngetWeather();\r\n\n\n//# sourceURL=webpack://project_template_webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;