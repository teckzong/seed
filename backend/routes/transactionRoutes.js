const express = require('express');
const router = express.Router();
const con = require('../connection.js');


router.delete('/delete-claim', (req, res) => {
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