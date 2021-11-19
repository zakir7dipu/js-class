const express = require('express');
const path = require('path');

const app = express();

app.use('/assets', express.static(path.resolve(__dirname+'/assets')));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname+ '/forntend/index.html'))
});

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'forntend','about.html'))
});

app.listen(process.env.PORT || 3000, () => console.log('server is running'));

