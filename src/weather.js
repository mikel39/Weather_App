const fetchWeather = async (address) => {
    const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}?key=LNKD925TBH36MEG4BATTSM3L4`;

    try {
        const weather = await fetch(api);
        const resolve = await weather.json();

        return resolve;
    } catch (error) {
        console.log(error);
    }
};

export { fetchWeather };
