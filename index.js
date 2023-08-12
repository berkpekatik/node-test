const express = require("express");
const bodyParser = require("body-parser");

const usersRoutes = require('./routes/users.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req,res) => {    
    res.send("Hello from Homepage.");
})

app.listen(PORT,() => console.log(`Server runing on port: http://localhost:${PORT}`));