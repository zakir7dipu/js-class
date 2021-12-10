const express = require("express");
const router = express.Router();
const fs = require('fs');

// get all student
router.get('/', (req, res) => {
    let data = fs.readFileSync('./student.json', 'utf-8');
    data = JSON.parse(data);
    data = data.students;
    if (data.length > 0){
        res.json(data)
    }else {
        res.status(400).json({message:'No data found.'})
    }
});

// get specific student
router.get('/:id', (req, res) => {
    let data = fs.readFileSync('./student.json', 'utf-8');
    data = JSON.parse(data);
    data = data.students;
    if (data.length > 0){
        const found = data.filter(item => parseInt(item.id) === parseInt(req.params.id))
        if (found.length > 0){
            res.json(found);
        }else {
            res.status(400).json({message:`No data found against ${req.params.id}`})
        }
    }else {
        res.status(400).json({message:'No data found.'})
    }
})

module.exports = router;