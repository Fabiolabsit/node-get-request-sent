const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // You can change the port number if needed
const url = process.env.URL;
let i = 0;

app.get('/', (req, res) => {
  setInterval(() => {
    axios.get(url, {})
      .then(response => {
        i++;
        console.log(`Request ${i} : ${response.status}`);
      })
      .catch(error => {
        console.error(`Request : ${error.message}`);
      });
  }, 100);
  res.send('Requests initiated');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
