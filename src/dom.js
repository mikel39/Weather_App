import { State, City } from "country-state-city";
import { countries } from "countries-list";
import { getEmojiFlag } from "countries-list";

(function () {
    const countrySelect = document.getElementById("country");
    const countriesCodes = Object.keys(countries);

    const countriesOptions = countriesCodes.map(
        (code) =>
            `<option value="${code}">
                <span>${countries[code].name}</span>
                <span>${getEmojiFlag(code)}</span>
            </option>`
    );
    countrySelect.innerHTML = `<option value="" selected disabled hidden>Click here</option>
        ${countriesOptions.join("")}`;
})();

const displayStates = (country) => {
    const stateSelect = document.getElementById("state");
    const states = State.getStatesOfCountry(country);

    stateSelect.replaceChildren();

    states.forEach((state) => {
        const option = document.createElement("option");

        option.value = state.isoCode;
        option.textContent = state.name;

        stateSelect.appendChild(option);
    });
};

const displayCities = (country, state) => {
    const citySelect = document.getElementById("city");
    const cities = City.getCitiesOfState(country, state);

    citySelect.replaceChildren();

    cities.forEach((city) => {
        const option = document.createElement("option");

        option.value = city.latitude + "," + city.longitude + "_" + city.name;
        option.textContent = city.name;

        citySelect.appendChild(option);
    });
};

export { displayCities, displayStates };
