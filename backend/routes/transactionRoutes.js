const express = require('express');
const router = express.Router();
const con = require('../connection.js');


router.post('/', (req, res) => {
    const {ClaimID} = req.body;
    console.log(ClaimID);


    con.query("SELECT Status FROM insuranceclaims WHERE ClaimID = ?", ClaimID,(err, claim_status) =>{
        if(err){
            res.send(err);
        } else {
            if (claim_status.status == 'Approved'){
                return res.send({
                    message : "Approved claim cannot be deleted."
                });
            } else if (claim_status.status === null){
                return res.send({
                    message : "Claim does not exist."
                });
            }

            con.query("DELETE FROM insuranceclaims WHERE ClaimID = ?",ClaimID, (err, result) =>{
                if(err){
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

module.exports = router;

