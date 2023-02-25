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
    console.log(claim);
    if(!claim){
        console.log("err")
    }
    try{
        con.query("INSERT INTO insuranceclaims SET ?", claim, (err, result) =>{
            if(err){
                res.send(err);
            } else {
                res.send({
                    info : result,
                    res: "User registered"
                });
            }
        });
    }
    catch(err){
        console.log(err)
    }

});


module.exports = router;
