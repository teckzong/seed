const express = require('express');
const router = express.Router();
const con = require('../connection.js');


router.post('/', (req, res) => {
    const { EmployeeId, Password } = req.body;
    con.query("select * from user where EmployeeID = ?", EmployeeId,(err, result) =>{
        if(err){
            res.send(err);
        } else {
            if(Password == result[0].Password){
                res.send({
                    message : result
                });
            } else{
                res.send({
                    message : "Incorrect user or password"
                });
            }
            
            //res.status(200).json({info : result});
        }
    });
});


module.exports = router;
