const express = require('express');
const path = require('path')

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, 'forntend', 'assets')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'forntend', 'view', 'index.html'));
})

app.listen(process.env.PORT || 5050, () => console.log('server is running'));