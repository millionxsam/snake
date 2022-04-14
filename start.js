const express = require('express');

const app = express();
const port = 5000;

app.use('/src', express.static(__dirname + '/src'));
app.use('/assets', express.static(__dirname + '/assets'));
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index');
})

app.listen(port, () => console.info(`App listening on port ${port}`));