import data from './weather_data.json';
import { WeatherModel } from '../models/weather';
import { initDatabaseConnection } from '../mongo';

const exportDataToDb = () => {
    WeatherModel.insertMany(data)
        .then(() => { console.log('Data inserted')})
        .catch((error) => { console.log('Error: ', error)})
}

initDatabaseConnection();
exportDataToDb();