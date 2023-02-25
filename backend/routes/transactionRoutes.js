const express = require('express');
const router = express.Router();
const con = require('../connection.js');


router.get('/delete-claim', (req, res) => {
    const {ClaimID} = req.body;
    con.query(`SELECT Status
    FROM InsuranceClaims
    WHERE claimID = ?`, ClaimID, (err, claim_status));

    if (claim_status.status == 'Approved'){
        return res.send({
            message : "Approved claim cannot be deleted."
        });
    } elif (claim_status == null){
        return res.send({
            message : "Claim does not exist."
        });
    }

    con.query(`DELETE FROM InsuranceClaims WHERE claimID = ?`
    ,ClaimID, (err, result) =>{
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

module.exports = router;

