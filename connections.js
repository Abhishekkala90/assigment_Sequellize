const sequelize=require('sequelize');
//This is just syntax.
const SequelizeInstance=new sequelize(
   
        "myfirstdb",
        "root",
        "Accounts@123",
{
    host:"localhost",
                              //dialect means what ever we do in sequelize treat is as or convert into mysql query.
    dialect:"mysql",          //sequelize orm supports multiple databases like postgress SQL, sqllite ,mysql etc
    operaterAliases:0,        //right now we are not using any aliases so the value is false or 0.
    pool:{                    //if you're connecting a data you need to set after how much time a query should fail 
                             //we can't keep on waiting so give me an error or close the connection after some time
        max:5,               //How many max active connection you want
        min:0,
        acquire:30000, 
        idle:10000
    }
}
    
);

module.exports=SequelizeInstance;