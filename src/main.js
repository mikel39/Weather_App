import "./style.css";
import { displayCities, displayStates } from "./dom.js";
import { displayWeather, toggleTemp } from "./weatherUI.js";

(function () {
    const country = document.getElementById("country");
    const state = document.getElementById("state");
    const city = document.getElementById("city");

    country.addEventListener("change", () => displayStates(country.value));
    state.addEventListener("change", () =>
        displayCities(country.value, state.value)
    );

    document.querySelector("#weather-form").addEventListener("submit", (e) => {
        e.preventDefault();
        displayWeather(city.value);
    });

    document.getElementById("info-container").addEventListener("click", (e) => {
        if (e.target.id === "temperature") {
            toggleTemp();
        }
    });
})();
