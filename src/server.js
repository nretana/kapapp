const express = require('express');
const path = require('path');
const fs = require('fs');

const app = new express();

//Assets
app.use('/static', express.static(path.resolve(path.join(__dirname, '../dist'))));


//Routes
app.get('/', (req, res) => {
    const viewPath =  path.resolve(__dirname, '../dist/home.html');
    const viewContent = fs.readFileSync(viewPath, 'utf-8');
    res.status(200).send(viewContent);
});

app.use((req, res) => {
    const viewPath =  path.resolve(__dirname, '../dist/notfound.html');
    const viewContent = fs.readFileSync(viewPath, 'utf-8');
    res.status(404).send(viewContent);
});

//Server
app.listen(3000, () => {
    console.log('Running on port', 3000);
});