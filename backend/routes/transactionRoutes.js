const express = require('express');
const router = express.Router();
const con = require('../connection.js');

router.get('/', (req, res) => {
    const {InsuranceID}= req.body;

    con.query("select ClaimID from insuranceclaims where InsuranceID = ?", InsuranceID,(err, result) =>{
        if(err){
            res.send({
                code: "0",
                message : "unsuccessfully get claims",
                data : err
            });
        } else {
            res.send({
                code: "1",
                message : "successfully get claims",
                data : result
            });
        }
    });
});

module.exports = router;
