import { weatherSchema } from '../schemas/weatherSchema';
import { model } from "mongoose";

export const WeatherModel = model('Weather', weatherSchema, 'weather')