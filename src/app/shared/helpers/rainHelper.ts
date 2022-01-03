import { Weather } from "../models/weather";

export const greaterChanceOfRain = (listWeather: Weather[]) : Weather => {
    if (!listWeather.length) {
        throw "No se registraron lluvias en la base de datos."
    }
    let weatherWithMaxRain : Weather = listWeather[0];
    listWeather.forEach((weather : Weather) => {
        if (!weatherWithMaxRain || weatherWithMaxRain.rain < weather.rain) {
            weatherWithMaxRain = weather
        };
    });

    return weatherWithMaxRain;
}

export const getNextWeathersOfRain = (listWeather: Weather[], weather: Weather) : Weather[] => {
    const index = listWeather.findIndex(w => JSON.stringify(w) === JSON.stringify(weather) );
    return listWeather.slice(index);
}