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
});

// edit a student
router.put('/:id', (req, res) => {
    let data = fs.readFileSync('./student.json', 'utf-8');
    data = JSON.parse(data);
    data = data.students;
    if (data.length > 0){
        const found = data.filter(item => parseInt(item.id) === parseInt(req.params.id))
        if (found.length > 0){
            // make an object
            let editStudent = found[0];
            editStudent.name = !req.body.name?editStudent.name:req.body.name;
            editStudent.roll = !req.body.roll?editStudent.roll:req.body.roll;
            editStudent.phone = !req.body.phone?editStudent.phone:req.body.phone;

            // store edit data
            let newData = {
                students: data
            };
            fs.writeFile('./student.json', JSON.stringify(newData,null, 2), (err) => {
                if (err) {
                    throw err
                } else {
                    res.json({message: "Student updated successfully.", editStudent})
                }
            })
        }else {
            res.status(400).json({message:`No data found against ${req.params.id}`})
        }
    }else {
        res.status(400).json({message:'No data found.'})
    }
});

// delete a student
router.delete('/:id', (req , res) => {
    let data = fs.readFileSync('./student.json', 'utf-8');
    data = JSON.parse(data);
    data = data.students;
    if (data.length > 0){
        Array.from(data).map((item, index) => {
            if (parseInt(req.params.id) === parseInt(item.id)){
                data.splice(index,1)
            }
        })
        // store edit data
        let newData = {
            students: data
        };
        fs.writeFile('./student.json', JSON.stringify(newData,null, 2), (err) => {
            if (err) {
                throw err
            } else {
                res.json({message: "Student deleted successfully."})
            }
        })
    }else {
        res.status(400).json({message:'No data found.'})
    }
})

module.exports = router;