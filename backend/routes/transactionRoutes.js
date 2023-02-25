const express = require('express');
const router = express.Router();
const con = require('../connection.js');
const {resResult, sendError} = require("../comments/constants");
const requireAuth = require('../middlewares/requireAuth');
router.use(requireAuth);//require to sign in first
/**
 * create
 */
router.post('/create-claim', (req, res) => {
    const claim = req.body;
    if(!claim){
        return res.status(422).send(resResult(0, "Claim is null!"));
    }
    try{
        con.query("INSERT INTO user SET ?", claim, (err, result) =>{
            if(err){
                res.send(err);
            } else {
                //todo decide ltr
                res.send({
                    info : result,
                    res: "User registered"
                });
            }
        });
    }
    catch (err){
        return res.status(422).send(resResult(0, "Save DB error"));//err.message
    }

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
