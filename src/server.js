import express from 'express';
import configViewengine from './configs/viewEngine';
import initWebRoute from './route/web';
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

// setup view engine
configViewengine(app);

// init web route
initWebRoute(app);



app.listen(port, () =>{
     console.log(`Example app listening on port ${port}`)
})