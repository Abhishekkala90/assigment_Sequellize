const mysql=require('mysql');
let dbconnection=mysql.createConnection({
    host:'localhost',
    password:"Accounts@123",
    database:"myfirstdb",
    user:"root"

});
dbconnection.connect((err)=>{
    if(err)
    throw new Error(err);
    console.log("Connected to server");
    dbconnection.query('select * from users',(err,data)=>{
        if(err)
        throw new Error(err);
        console.log(JSON.stringify(data));
    })
})