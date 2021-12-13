const express = require("express");
const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/student', require('./routs/student'));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server run successfully at localhost:${port}`))