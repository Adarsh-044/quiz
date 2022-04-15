const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 7500;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.status(200).render('home.pug');
})

app.listen(port, (req, res) => {
    console.log(`The port for this website will host on ${port}`);
});