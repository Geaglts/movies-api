const express = require('express');
const { config } = require('./config');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.get('/json', (req, res) => {
    res.json({ mensaje: 'Hola mundo' });
});

app.get('/bisiesto/:year', (req, res) => {
    try {
        const year = parseInt(req.params.year);
        if (isNaN(year)) return res.json({ estado: 'Dato no valido' });
        if (year % 4) {
            res.json({ estado: `${year} es un año bisiesto` });
        } else {
            res.json({ estado: `${year} no es año bisiesto` });
        }
    } catch (error) {
        console.log(error);
    }
});

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
});
