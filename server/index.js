require('dotenv').config();
const axios = require('axios');
const token = process.env.REACT_APP_API_KEY;
const express = require('express');
const app = express();
        
app.listen('3001', () => { })
axios.get("https://opendata.hopefully.works/api/events", {
          headers: { Authorization: `Bearer ${token}` },
        }).then(
            response => {
                console.log(response);
            }
        ).catch(error => {
            console.log(error);
        });

       