const express = require('express')
const app = express()
var shortUrl = require('node-url-shortener');
const port = 5000


app.get('/res', (req, res) => {
    var input = req.query.url
    shortUrl.short(input, function (err, url) {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(url);
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})