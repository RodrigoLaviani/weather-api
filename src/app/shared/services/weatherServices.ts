import { getWeathers } from '../../infrastructure/database/actions/weather';
import { Weather } from '../models/weather';
import { getRangeDate, findWeatherByDate, getNearestDate } from '../helpers/dateHelper';
import { locationFilter } from '../helpers/locationHelper';
import { greaterChanceOfRain, getNextWeathersOfRain } from '../helpers/rainHelper';

const getWeather = async (location: string, date: string) : Promise<Weather> => {
    const weathersSameLocation = await getWeatherWithLocation(location);
    if (!weathersSameLocation.length) throw "No existe el lugar en la base de datos."

    return getNearestWeather(weathersSameLocation, date);
}

const getNextRain = async (location: string, date: string) : Promise<Weather> => {
    const weathersSameLocation = await getWeatherWithLocation(location);
    if (!weathersSameLocation.length) throw "No existe el lugar en la base de datos."
    
    const result = greaterChanceOfRain(getNextWeathersOfRain(weathersSameLocation ,getNearestWeather(weathersSameLocation, date)));

    if (result === null) throw "No se registraron lluvias en la base de datos."
    return result;
}

const getWeatherWithLocation = async (location: string) : Promise<any> => {
    const weathers = await getWeathers();
    return weathers.filter((weather: Weather) => locationFilter(weather, location)).sort((a, b) => a.from.getTime() - b.from.getTime());
}

const getNearestWeather = (listWeather: Weather[], date: string) : Weather => {
    const formattedDate = new Date(date);

    if (getRangeDate(listWeather, formattedDate)) {
        return findWeatherByDate(formattedDate, listWeather); 
    } else {
        return getNearestDate(formattedDate, listWeather);
    }
}

export default { getWeather, getNextRain }