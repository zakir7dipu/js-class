const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Home page');
})

app.get('/page1', (req, res)=>{
    res.send('page 1');
})

app.get('/page2', (req, res)=>{
    res.send('page 2');
})

app.get('/page3', (req, res)=>{
    res.send('page 3');
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server is running...')
})