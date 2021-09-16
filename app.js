const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(‘public’));

app.listen(3030, () => console.log("Levantando un servidor con Express"));

// -> Debe direccionar al recurso index.html.
/babbage -> Debe direccionar al recurso babbage.html
/berners-lee -> Debe direccionar al recurso berners-lee.html.
/clarke -> Debe direccionar al recurso clarke.html.
/hamilton -> Debe direccionar al recurso hamilton.html.
/hopper -> Debe direccionar al recurso hopper.html.
/lovelace -> Debe direccionar al recurso lovelace.html.
/turing-> Debe direccionar al recurso turing.html.


app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, './views/babbage.html'));
    });
