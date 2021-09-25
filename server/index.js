const express = require('express');
const app = express();
app.listen(3001, () => console.log('listening at 3001'));

app.get('/events', async (req,res) => {
    const api_url = `https://opendata.hopefully.works/api/`;
    const responese = await fetch(api_url);
    const json = responese.json();
    console.log(json)
})

app.get('/', (req, res) => {
    res.send('Hi There')
});