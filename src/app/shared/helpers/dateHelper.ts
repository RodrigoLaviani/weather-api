import moment from "moment";
import { Weather } from "../models/weather";

export const getRangeDate = (listWeather: Weather[], inputDate: Date) : boolean => {
    return !!listWeather.find(weather => hasRangeDate(weather, inputDate));
}

export const getNearestDate = (inputDate: Date, listWeather: Weather[]) : Weather => {
    const dates : [Date, Date][] = listWeather.map(weather => [weather.from, weather.to])
    const listDates : Date[] = []; 
    dates.forEach(t => {
        listDates.push(t[0]);
        listDates.push(t[1]);
    })

    const date = getNearestDateOnListOfDates(inputDate, listDates);

    return findWeatherByDate(date, listWeather);
} 

export const findWeatherByDate = (date: Date, listWeather: Weather[]) : any => {
    const result = listWeather.find(weather => hasRangeDate(weather, date));
    if (!result) throw "No existe ese clima para ese rango horario."
    return result;
}

const hasRangeDate = (weather: Weather, date: Date) : boolean => {
    return moment(date).isBetween(weather.from, weather.to) ||
           moment(date).isSame(weather.from) ||
           moment(date).isSame(weather.to) 
}

const getTimeDifference = (inputDate: Date, weatherDate: Date) : number => {
    return Math.abs(moment(inputDate).diff(weatherDate));
}

const getNearestDateOnListOfDates = (inputDate: Date, listDates: Date[], dateResult: any = null) => {
    if (!listDates.length) return dateResult;
    if (!dateResult) {
        getNearestDateOnListOfDates(inputDate, listDates.slice(1), listDates[0])
    }
    
    const diffFirstDate = getTimeDifference(inputDate, listDates[0]);

    if (getTimeDifference(inputDate, dateResult) > diffFirstDate) {
        getNearestDateOnListOfDates(inputDate, listDates.slice(1), listDates[0])
    } else {
        getNearestDateOnListOfDates(inputDate, listDates.slice(1), dateResult)
    }
}