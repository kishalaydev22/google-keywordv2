const express = require('express');
const cors = require('cors'); // Import CORS middleware
const keyword = require('./routers/keyword');

const app = express();
const port = 8080;


// Enable CORS for all origins
app.use(express.json());

app.use('/api/v1', cors(), keyword);
app.get('/hello', (req, res) => {
    res.status(200).send('server alive all right')
})
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
