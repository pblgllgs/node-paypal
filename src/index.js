import express from 'express';
import morgan from 'morgan';
import paymentsRoutes from './routes/payments.routes.js'

const app = express();

app.use(morgan('dev'));

app.use(paymentsRoutes);

app.listen(3000);

console.log('Server on port: ', 3000);