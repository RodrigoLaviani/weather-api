import { Request, Response } from "express";
import { NextRain } from "../app/shared/models/nextRainResponse";
import { Weather } from "../app/shared/models/weatherResponse";
import weatherService from "../app/shared/services/weatherServices";

export const getWeather = async (req: Request, res: Response) : Promise<any> => {
    try {
        const result = await weatherService.getWeather(req.query.location as string, req.query.datetime as string);
        res.status(200).json(new Weather(result?.location, result?.temp, result?.rain));
    } catch (error) {
        console.error(`ERROR: ${error.message || error}`);
        return res.status(500).json({ message: error.message || error });
    }
}

export const getNextRain = async (req: Request, res: Response) : Promise<any> => {
    try {
        const result = await weatherService.getNextRain(req.query.location as string, req.query.datetime as string);
        res.status(200).json(new NextRain(result?.location, result?.from));
    } catch (error) {
        console.error(`ERROR: ${error.message || error}`);
        return res.status(500).json({ message: error.message || error });
    }
}