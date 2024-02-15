const express = require('express');
const cors = require('cors'); // Import CORS middleware
const cron = require('node-cron');
const keyword = require('./routers/keyword');

const app = express();
const port = 8080;


// Enable CORS for all origins
app.use(express.json());

app.use('/api/v1', cors(), keyword);
cron.schedule('*/2 * * * *', () => {
    console.log('Logging a message every 2 minutes');
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
