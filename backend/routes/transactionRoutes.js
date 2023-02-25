const express = require('express');
const router = express.Router();
const con = require('../connection.js');
const {resResult, sendError} = require("../comments/constants");
const requireAuth = require('../middlewares/requireAuth');
//router.use(requireAuth);//require to sign in first
/**
 * create
 */


router.post('/', (req, res) => {
    const claim = req.body;

    if (!claim) {
        console.log("err")
        //return res.status(422).send(resResult(0, "Claim is null!"));
    }
    try {
        con.query("insert into insuranceClaims values ?", claim, (err, result) => {
            console.log("sucessssss");
        })
        // con.query("Select *, Timestamp(PolicyEndDate) as PolicyEndDate_ts from InsurancePolicies where InsuranceID = ?", claim.InsuranceID, (err, ip) => {
        //     if (!ip) {
        //         console.log("no ip");
        //     }
        //     if (claim.amount > ip.ClaimLimit || claim.ExpenseDate > ip.PolicyEndDate_ts) {
        //         // return res.status(422).send(resResult(0, "Invalid claim, please check amount or expense date"));
        //         console.log("err")
        //         console.log(ip)
        //         const currentDate = new Date();
        //         const timestamp = currentDate.getTime();
        //         con.query("select max(ClaimID) from InsuranceClaims", (err, result) => {
        //             claim['ClaimID'] = result + 1;
        //         })
        //
        //         claim['Status'] = "Pending";
        //         claim['LastEditedClaimDate'] = timestamp;
        //         con.query("INSERT INTO InsuranceClaims values ?", claim, (err, result) => {
        //             if (err) {
        //                 console.log("err")
        //                 //return res.status(422).send(resResult(0, "Save DB error"));//err.message
        //             } else {
        //                 //res.send(resResult(1, 'Successfully create claim', null));
        //                 console.log("saved")
        //             }
        //         });
        //     }
        // })

    } catch (err) {
        console.log(err)
    }

    //return res.status(422).send(resResult(0, "Save DB error"));//err.message


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

router.get('get-claim/:cid', (req, res) => {
    const cid = req.params.id;

    try {
        con.query("select * from InsuranceClaims where ClaimId = ?", cid, (err, result) => {
            if (!result) {
                console.log("no such claim")
            } else {
                return res.send(result);
            }
        })
    } catch (err) {
        return res.send(err)
    }

});
router.post('/edit-claim/:cid', (req, res) => {
    const cid = req.params.id;
    const claim = req.body;
    try {
        con.query("select * from ")
    } catch (err) {
        console.log(err)
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
    con.query("INSERT INTO user SET ?", cUser, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                info: result,
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
