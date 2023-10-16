import express, { json } from 'express';
import { corsConfiguration } from './src/configuration/cors.js';
import { establishmentsRouter } from './src/routes/establishments.js';
import { adsRouter } from './src/routes/ads.js';

const app = express(); 

app.use(json());
app.use(corsConfiguration());
const PORT = 1234;

app.use('/establishments', establishmentsRouter);
app.use('/ads', adsRouter);

app.listen(PORT,  () => {
    console.log(`Example app listening on port ${PORT}`);
});