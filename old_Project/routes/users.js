const express = require("express");
const fs = require('fs');


const router = express.Router();

const users = fs.readFileSync("./data/users.json");

router.get('/', (req,res) => {
    return res.send(JSON.parse(users));
});

router.post('/' , (req, res) => {
    console.log(req)
    return res.send("ok");
});

module.exports = router;