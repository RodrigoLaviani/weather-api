import express, { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';
import swaggerJson from '../swagger.json';

const swaggerRouter : Router = express.Router();

swaggerRouter.use('', serve);
swaggerRouter.get('', setup(swaggerJson));

export default swaggerRouter;
