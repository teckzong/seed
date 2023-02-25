const express = require('express');
const router = express.Router();
const con = require('../connection.js');


let insurancePolicy;
function getInsurancePolicy (inId){
    con.query("Select *, Timestamp(PolicyEndDate) as PolicyEndDate_ts from InsurancePolicies where InsuranceID = ?", inId, (err, result) =>{
        insurancePolicy = result;
    })
}
router.post('/create-claim', (req, res) => {
    const claim = req.body;
    getInsurancePolicy(claim.InsuranceID);

    if(!claim){
        return res.status(422).send(resResult(0, "Claim is null!"));
    }

    if(claim.amount > insurancePolicy.ClaimLimit || claim.ExpenseDate > insurancePolicy.PolicyEndDate_ts){
        return res.status(422).send(resResult(0, "Invalid claim, please check amount or expense date"));
    }

        const currentDate = new Date();
        const timestamp = currentDate.getTime();
        claim['Status'] = "Pending";
        claim['LastEditedClaimDate'] = timestamp;
        con.query("INSERT INTO InsuranceClaims value ?", claim, (err, result) =>{
            if(err){
                return res.status(422).send(resResult(0, "Save DB error"));//err.message
            } else {
                //todo decide ltr
                // res.send({
                //     info : result,
                //     res: "User registered"
                // });
                res.send(resResult(1, 'Successfully create claim', null));
            }
        });


        return res.status(422).send(resResult(0, "Save DB error"));//err.message


});