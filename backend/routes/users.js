const express = require('express');
const router = express.Router();
const con = require('../connection.js');


router.get('/', (req, res) => {
    con.query("select * from user", (err, result) =>{
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    con.query("select * from user where EmployeeID = ?", id,(err, result) =>{
        if(err){
            res.send(err);
        } else {
            res.send({
                info : result
            });
            //res.status(200).json({info : result});
        }
    });
});

router.post('/', (req, res) => {
    let cUser = req.body;
    con.query("INSERT INTO user SET ?", cUser, (err, result) =>{
        if(err){
            res.send(err);
        } else {
            res.send({
                info : result,
                res: "User registered"
            });
        }
    });
});

router.put('/:id', (req, res) => {
    var user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) res.status(404).send('User with given ID not found');
    user.name = req.body.name;
    res.send({
        info : user
    });
});

router.delete('/:id', (req, res) => {
    var user = users.find(c => c.id === parseInt(req.params.id));
    if(!user) res.status(404).send('User with given ID not found');

    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send({
        info : user,
        res: "Successfully deleted"
    });
});

module.exports = router;
