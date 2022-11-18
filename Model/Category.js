let SequelizeInstance=require("../connections");
const sequelize=require('sequelize');
let Categories=SequelizeInstance.define("categories",{
id:{
    type:sequelize.DataTypes.BIGINT,
    primaryKey:true ,
    allowNull:false,
    autoIncrement:true
},
name:{
    type:sequelize.DataTypes.STRING,
    allowNull:false,

},
name:{
    type:sequelize.DataTypes.STRING,
    allowNull:false,

}
,description:{
    type:sequelize.DataTypes.STRING,
   }           
},{timestamps:false});
module.exports=Categories;
