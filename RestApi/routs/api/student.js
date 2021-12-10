const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const fs = require('fs');

// get all student
router.get('/',(req, res)=>{
    try{
        let students = fs.readFileSync('./database/student.json', "utf-8");
        students = JSON.parse(students)
        students = students.student;
        res.json(students);
    }catch (error){
        res.status(400).json({message:error})
    }
});

// get single student
router.get('/:id', (req, res)=>{
    try{
        let students = fs.readFileSync('./database/student.json', "utf-8");
        students = JSON.parse(students);
        students = students['student'];
        res.json(students.filter(student => parseInt(student.id) === parseInt(req.params.id)))
    }catch (error){
        res.status(400).json({message:error})
    }
})

// post new student
router.post('/', (req, res)=>{
    const newStudent = {
        "id": uuid.v4(),
        "name": req.body.name,
        "age": req.body.age,
        "role": req.body.role,
        "email": req.body.email
    }

    if(!newStudent.name || !newStudent.age || !newStudent.role || !newStudent.email){
        res.status(400).json({message: 'Please insert data properly'})
    }

    let students = fs.readFileSync('./database/student.json', "utf-8");
    students = JSON.parse(students)
    students = students.student;
    students.push(newStudent);

    let newData = {
        student: students,
    };
    newData = JSON.stringify(newData, null, 2);
    fs.writeFile('./database/student.json', newData, err => {
        // error checking
        if(err) throw err;
        res.json({message: "Student saved successfully.",newStudent})
        // console.log("New data added");
    });
})


module.exports = router;