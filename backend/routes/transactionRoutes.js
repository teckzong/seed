const express = require('express');
const router = express.Router();
const con = require('../connection.js');
// const {resResult, sendError} = require("../comments/constants");
// const requireAuth = require('../middlewares/requireAuth');
//router.use(requireAuth);//require to sign in first
/**
 * create
 */


// router.post('/', (req, res) => {
//     const claim = req.body;

//     if(!claim){
//         console.log("err")
//         //return res.status(422).send(resResult(0, "Claim is null!"));
//     }
//     try{
//         con.query("Select *, Timestamp(PolicyEndDate) as PolicyEndDate_ts from InsurancePolicies where InsuranceID = ?", claim.InsuranceID, (err, ip) =>{
//             if(claim.amount > ip.ClaimLimit || claim.ExpenseDate > ip.PolicyEndDate_ts){
//                 // return res.status(422).send(resResult(0, "Invalid claim, please check amount or expense date"));
//                 console.log("err")
//                 console.log(ip)
//                 const currentDate = new Date();
//                 const timestamp = currentDate.getTime();
//                 claim['Status'] = "Pending";
//                 claim['LastEditedClaimDate'] = timestamp;
//                 con.query("INSERT INTO InsuranceClaims value ?", claim, (err, result) =>{
//                     if(err){
//                         console.log("err")
//                         //return res.status(422).send(resResult(0, "Save DB error"));//err.message
//                     } else {
//                         //todo decide ltr
//                         // res.send({
//                         //     info : result,
//                         //     res: "User registered"
//                         // });
//                         //res.send(resResult(1, 'Successfully create claim', null));
//                         console.log("saved")
//                     }
//                 });
//             }
//         })
//     }
//     catch(err){
//         console.log(err)
//     }


// });

router.get('/', (req, res) => {
    const {InsuranceID}= req.body;
    console.log(InsuranceID);
    con.query("select ClaimID from insuranceclaims where InsuranceID = ?", InsuranceID,(err, result) =>{
        if(err){
            res.send(err);
        } else {
            console.log(result);
            res.send({
                code: "1",
                message : "successfully get claims",
                data : result
            });
        }
    });
});

module.exports = router;
