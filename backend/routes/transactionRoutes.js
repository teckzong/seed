const express = require('express');
const router = express.Router();
const con = require('../connection.js');


router.delete('/delete-claim', (req, res) => {
    const {ClaimID} = req.body;

    con.query(`DELETE FROM InsuranceClaims WHERE claimID = ? AND Status <> 'Approved' `
    ,ClaimID, (err, result) =>{
        if(err){
            res.send(err);
        } else {
            console.log("deleted");
        }
    });
});

module.exports = router;

