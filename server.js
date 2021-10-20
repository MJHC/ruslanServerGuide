const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Her siger hvad clienter må have adgang til
app.use(express.static(path.join(__dirname, 'public')))

// Her sender vi index.html når at vi får en GET request på '/'
app.get('/',(req, res)=>{
    res.send(path.join(__dirname, './public/index.html'));
});

// Her sender vi en besked når vi får en POST request på '/POST'
app.post('/POST', (req, res)=>{
    res.send("POST Request Response!")
})

app.listen(port, () => console.log('Website Running!'));