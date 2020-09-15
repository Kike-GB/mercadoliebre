const express = require('express');
const app = express();
var path = require("path")

app.get('/', (req, res) => {
    let file = path.resolve('index.html')
    res.sendFile(file);
});
app.get('*', (req, res) => {
    if (req.url.endsWith('.css')) {
        let file = path.resolve('style' + req.url);
        return res.sendFile(file); 
    }
    let images = ['jpg', 'jpeg', 'gif', 'png', 'svg'];
    let extencion = req.url.split('.')[1];
    if (images.includes(extencion)) {
        let file = path.resolve('img' + req.url);
        return res.sendFile(file)
    }
});
app.listen (3000, () => console.log('Server On!!!'));