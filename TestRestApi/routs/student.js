const express = require("express");
const router = express.Router();
const uuid = require('uuid');
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
});

// post a student
router.post('/', (req, res) => {
    // make an object
    let newStudent = {
        "id": uuid.v4(),
        "name": req.body.name,
        "roll": req.body.roll,
        "phone": req.body.phone
    }

    // validate new data
    if (!newStudent.name || !newStudent.roll || !newStudent.phone){
        res.status(400).json({message:'Please insert data properly...'})
    }

    // store new data
    let data = fs.readFileSync('./student.json', 'utf-8');
    data = JSON.parse(data);
    data = data.students;
    data.push(newStudent);
    let newData = {
        students: data
    };
    fs.writeFile('./student.json', JSON.stringify(newData,null, 2), (err) => {
        if (err) {
            throw err
        } else {
            res.json({message: "Student saved successfully.", newStudent})
        }
    })
})

module.exports = router;