const express = require('express');
const router = express.Router();
const con = require('../connection.js');


router.get('/', (req, res) => {
    const {EmployeeId} = req.body;

    con.query(`SELECT IC.*
    FROM InsuranceClaims IC LEFT JOIN InsurancePolicies IP
    ON IC.InsuranceID = IP.InsuranceID
    WHERE IP.EmployeeID =?`
    ,EmployeeId, (err, result) =>{
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

module.exports = router;

