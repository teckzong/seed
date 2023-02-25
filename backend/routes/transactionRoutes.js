const express = require('express');
const router = express.Router();
const con = require('../connection.js');
const {resResult, sendError} = require("../comments/constants");
const requireAuth = require('../middlewares/requireAuth');
router.use(requireAuth);//require to sign in first
/**
 * create
 */
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

/**
 * edit
 *
 * // router.put('/:id', (req, res) => {
 * //     var user = users.find(c => c.id === parseInt(req.params.id));
 * //     if(!user) res.status(404).send('User with given ID not found');
 * //     user.name = req.body.name;
 * //     res.send({
 * //         info : user
 * //     });
 * // });
 */
router.post('/edit-claim/:cid', (req, res) => {
    const cid = req.params.id;
    //const claim = find by cid
    if(!claim){
        return res.status(422).send(resResult(0, "Cannot find in db"));//err.message
    }
    try{
        //edit status
    }
    catch (err){
        return res.status(422).send(resResult(0, "Invalid Editing"));//err.message
    }
});

/**
 * remove
 *
 * // router.put('/:id', (req, res) => {
 * //     var user = users.find(c => c.id === parseInt(req.params.id));
 * //     if(!user) res.status(404).send('User with given ID not found');
 * //     user.name = req.body.name;
 * //     res.send({
 * //         info : user
 * //     });
 * // });
 */
router.post('/remove-claim/:id', (req, res) => {
    const cid = req.params.id;

    //var user = users.find(c => c.id === parseInt(req.params.id));
    // //     if(!user) res.status(404).send('User with given ID not found');
    // //
    // //     const index = users.indexOf(user);
    // //     users.splice(index, 1);
    // //     res.send({
    // //         info : user,
    // //         res: "Successfully deleted"
    // //     });
    con.query("INSERT INTO user SET ?", cUser, (err, result) =>{
        if(err){
            res.send(err);
        } else {
            res.send({
                info : result,
                res: "User registered"
            });
        }
    });
});
// router.get('/', (req, res) => {
//     con.query("select * from user", (err, result) =>{
//         if(err){
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });
//
// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     con.query("select * from user where EmployeeID = ?", id,(err, result) =>{
//         if(err){
//             res.send(err);
//         } else {
//             res.send({
//                 info : result
//             });
//             //res.status(200).json({info : result});
//         }
//     });
// });
//
//
//
// router.put('/:id', (req, res) => {
//     var user = users.find(c => c.id === parseInt(req.params.id));
//     if(!user) res.status(404).send('User with given ID not found');
//     user.name = req.body.name;
//     res.send({
//         info : user
//     });
// });
//
// router.delete('/:id', (req, res) => {
//     var user = users.find(c => c.id === parseInt(req.params.id));
//     if(!user) res.status(404).send('User with given ID not found');
//
//     const index = users.indexOf(user);
//     users.splice(index, 1);
//     res.send({
//         info : user,
//         res: "Successfully deleted"
//     });
// });

module.exports = router;
