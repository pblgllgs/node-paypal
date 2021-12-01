import express from 'express';
import morgan from 'morgan';
import { PORT } from './config.js';
import paymentsRoutes from './routes/payments.routes.js'

const app = express();

app.use(morgan('dev'));

app.use(paymentsRoutes);

app.listen(PORT);

console.log('Server on port: ', 3000);