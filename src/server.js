import express from 'express';
import configViewengine from './configs/viewEngine';
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

configViewengine(app);
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/about', (req, res) => {
  res.send(`I'm key`)
})

app.listen(port, () =>{
     console.log(`Example app listening on port ${port}`)
})