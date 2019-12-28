const express = require('express');
const app = express();
const port = 1900 || process.env.PORT;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, (err)=> {
    err ? console.log("There was an error") : console.log("Port is up on " + port)
})