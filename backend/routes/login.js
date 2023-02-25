const express = require('express');
const router = express.Router();
const con = require('../connection.js');


router.post('/', (req, res) => {
    const { EmployeeID, Password } = req.body;
    con.query("select * from user where EmployeeID = ?", EmployeeID,(err, result) =>{
        if(err){
            res.send({
                code: 0,
                message: "Login fail",
                data: err
            });
        } else {
            if(Password == result[0].Password){
                res.send({
                    code: 1,
                    message : "Login Success",
                    data: result[0].EmployeeID
                });
            } else{
                res.send({
                    code: 0,
                    message : "Incorrect user or password",
                    data: err
                });
            }
            
            //res.status(200).json({info : result});
        }
    });
});


module.exports = router;
