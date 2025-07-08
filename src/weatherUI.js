import { fetchWeather } from "./weather.js";

const addTemp = (temp) => {
    const div = document.createElement("div");
    const p = document.createElement("p");

    div.className = "temp";
    p.id = "temperature";
    p.textContent = temp + "° F";
    p.setAttribute("data-temp", `F-${temp}`);

    div.appendChild(p);

    return div;
};

const converToCelsius = (value) => (Number(value) - 32) / (9 / 5);

const converToFahrenheit = (value) => Number(value) * (9 / 5) + 32;

const toggleTemp = () => {
    const el = document.getElementById("temperature");

    const [unit, temp] = el.getAttribute("data-temp").split("-");

    if (unit === "F") {
        el.textContent = converToCelsius(temp).toFixed(1) + "° C";
        el.setAttribute("data-temp", `C-${converToCelsius(temp)}`);
    } else {
        el.textContent = converToFahrenheit(temp).toFixed(1) + "° F";
        el.setAttribute("data-temp", `F-${converToFahrenheit(temp)}`);
    }
};

const displayWeather = async (address) => {
    const [adr, city] = address.split("_");
    const uIcontainer = document.getElementById("info-container");
    const weather = await fetchWeather(adr);
    const icon = document.createElement("img");

    uIcontainer.replaceChildren();

    try {
        const ic = await import(
            `./icons/${weather.currentConditions.icon}.svg`
        );
        icon.src = ic.default;
    } catch (error) {
        console.log(error);
    }

    const desc = document.createElement("p");
    desc.textContent = weather.description;

    const h1 = document.createElement("h1");
    h1.textContent = city;

    const h2 = document.createElement("h2");
    h2.textContent = weather.currentConditions.conditions;

    uIcontainer.appendChild(icon);
    uIcontainer.appendChild(h1);
    uIcontainer.appendChild(addTemp(weather.currentConditions.temp));
    uIcontainer.appendChild(h2);
    uIcontainer.appendChild(desc);
};

export { displayWeather, toggleTemp };
