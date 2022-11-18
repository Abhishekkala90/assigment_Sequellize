let sequelize=require('sequelize');
let SequelizeInstance=require('../connections');

let Users=SequelizeInstance.define("users",{
    id:{ type:sequelize.DataTypes.BIGINT,
    primaryKey:true,
autoIncrement:true,allowNull:false}
,email:{type:sequelize.DataTypes.STRING,allowNull:false},
password:{
type:sequelize.DataTypes.STRING,
allowNull:false
},
createdAt:{
        type:sequelize.DataTypes.DATE
    
    }
    
 },{timestamps:false});
 /*why?timeStamp:false because if there is no such table in the database it will try to create one with default column createdAt and updatedAt, so in ours case  the is already there and it doesn't have timestamps so we have to make timestamps false to avoid error                                                                    
 //i have created a model to define my  model here U is capital in users because it is my model*/
 module.exports=Users;