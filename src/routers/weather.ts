import express, { Router, Request, Response } from 'express';
import { getWeather, getNextRain } from '../controllers/weather';

const weatherRouter : Router = express.Router();

weatherRouter.get('', (req: Request, res: Response) => getWeather(req, res));
weatherRouter.get('/nextRain', (req: Request, res: Response) => getNextRain(req, res));


export default weatherRouter;
