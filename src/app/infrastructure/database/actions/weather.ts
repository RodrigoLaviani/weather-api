import { WeatherModel } from '../models/weather';
import { Weather } from '../../../shared/models/weather';

export const getWeathers = async (): Promise<Weather[]> => {
    try {
        const weathersDb = await WeatherModel.find().lean()

        return weathersDb.map((weather: any) => new Weather(weather.from, weather.to, weather.location, weather.temp, weather.rain));
    } catch (err) {
        console.error('Error from import data from database', err);
        throw err
    }
};