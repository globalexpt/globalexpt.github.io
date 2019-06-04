const express = require('express');
const prerenderer = require('prerender-node');

const isProd = () => process.env.NODE_ENV && process.env.NODE_ENV === 'production';

const app = express();
app.use(prerenderer.set('prerenderToken', 'KE4qBfLFkUEPgYu9Ksmy'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const port = isProd()? 80: 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));