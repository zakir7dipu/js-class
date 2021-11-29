const express = require('express');
const path = require('path');

const app = express();

app.use('/assets', express.static(path.resolve(__dirname,'assets')));

app.get('/',(req,res)=>{
    // res.sendFile(path.resolve(__dirname+ '/forntend/index.html'))
    let data = {
        info: [
            {"id": "1", "name": "Kamal", "age": "35"},//<- element = object, string, int, bool, array
            {id: 2, name: 'Korim', age: 30},//<- ok
            {id: 3, name: 'Josim', age: 23},//<- ok
            {id: 4, name: 'Mofij', age: 25},//<-
            {id: 5, name: 'Sokiq', age: 45},//<-
            {id: 6, name: 'Kamrul', age: 65},//<-
        ]
    }
    let data2 = {
        name: 'Bag \b',
        type: [
            {name: 'M-Bag'},
            {name: 'M-Bag'}
        ],
        price:{dis: 120, reg: 1500},
        "userName": 'xyz'
    }
    res.send(JSON.stringify(data2))
});

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'forntend','about.html'))
});

app.listen(process.env.PORT || 3000, () => console.log('server is running'));
