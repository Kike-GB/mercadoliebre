const express = require('express');
const app = express();
var path = require("path")

app.get('/', (req, res) => {
    let file = path.resolve('index.html')
    res.sendFile(file);
});
app.post('/index.html', (req, res) => {
    let file = path.resolve('index.html')
    res.sendFile(file);
});
app.get('/registro.html', (req, res) => {
    let file = path.resolve('registro.html')
    res.sendFile(file);
});
app.get('/login.html', (req, res) => {
    let file = path.resolve('login.html')
    res.sendFile(file);
});
app.get('*', (req, res) => {
    if (req.url.endsWith('.css')) {
        let file = path.resolve('./public/stylesheets' + req.url);
        return res.sendFile(file); 
    }
    let images = ['jpg', 'jpeg', 'gif', 'png', 'svg'];
    let extencion = req.url.split('.')[1];
    if (images.includes(extencion)) {
        let file = path.resolve('./public/images' + req.url);
        return res.sendFile(file)
    }
    res.send('File Not Found!!!')
}).listen(3000, 'localhost', () => console.log('Server ON!!! running in port 3000'));
