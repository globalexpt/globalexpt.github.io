const express = require('express');

const isProd = () => process.env.NODE_ENV && process.env.NODE_ENV === 'production';

const app = express();
const port = isProd()? 80: 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, () => console.log(`Server running on port ${port}`));