const express = require('express');
const app = express();

//app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    
    const responseHTML = `<p>Name: ${name}</p><p>Age: ${age}</p>`;
    res.send(responseHTML);
});

app.listen(3003, () => {
    console.log('Server is listening on port 3003');
});



