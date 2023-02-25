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

router.delete('/', (req, res) => {
    const {ClaimID} = req.body;

    con.query("DELETE FROM InsuranceClaims WHERE claimID = ? AND Status != 'Approved' "

    ,ClaimID, (err, result) =>{
        if(err){
            res.send(err);
            console.log("not deleted");
        } else {
            if(result.affectedRows == 0){
                console.log("cannot delete row");
                res.send(result);
            } else {
                console.log("deleted");
                res.send(result);
            }

            
        }
    });
});



module.exports = router;
