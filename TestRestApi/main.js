const express = require("express");
const app = express();

app.use('/api/student', require('./routs/student'));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server run successfully at localhost:${port}`))