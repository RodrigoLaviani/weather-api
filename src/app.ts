import express from 'express'
import cors from 'cors';
import swaggerRouter from './routers/swagger';
import weatherRouter from './routers/weather';
import { initDatabaseConnection } from './app/infrastructure/database/mongo';

const app = express()

const corsConfiguration: cors.CorsOptions = {
  origin: '*',
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE'
};

initDatabaseConnection();

app.use(cors(corsConfiguration));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', swaggerRouter);
app.use('/weather', weatherRouter);

export default app