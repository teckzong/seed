const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'InsuranceData'
});

con.connect((err)=> {
    if(err){
        console.log(err);
    } else {
        console.log("Connected to DB");
    }
});

module.exports = con;