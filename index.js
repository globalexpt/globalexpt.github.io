const express = require('express');
const prerenderer = require('prerender-node');

const isProd = () => process.env.NODE_ENV && process.env.NODE_ENV === 'production';
const publicDir = __dirname + '/public';
const viewsDir = publicDir + '/views';

const app = express();
app.use(prerenderer.set('prerenderToken', 'KE4qBfLFkUEPgYu9Ksmy'));
app.use(express.static(publicDir));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// app.use(app.router);

app.use(function (req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.sendFile('404.html', {
            url: req.url,
            root: viewsDir
        });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});

const port = isProd() ? 80 : 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));