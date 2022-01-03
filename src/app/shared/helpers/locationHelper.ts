import { Weather } from "../models/weather";

export const locationFilter = (weather: Weather, location: string) : boolean => {
    return weather.location.replace(' ', '').toLowerCase() === location.replace(' ', '').toLowerCase();
}
