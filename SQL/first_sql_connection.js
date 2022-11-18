let mysql=require('mysql');
let dbconnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Accounts@123",
    database:"myfirstdb"
});
dbconnection.connect((err)=>{
    if(err)
    throw new Error(err);
    console.log("Database connected");
    dbconnection.query("select * from products",(err,data)=>{
if(err)
throw new Error(err);
console.log(data);
    })
   })