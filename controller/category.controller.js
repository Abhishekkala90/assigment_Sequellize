let Categories=require("../Model/Category");
let sequelizeInstance=require("../connections");
const { Sequelize } = require("sequelize");


async function createTable(){
    await sequelizeInstance.sync({force:true});//it will create a table only if the following table does'nt exists if a table exists and you want to overrite it with this table so you have  pass "{force:true}" inside sync.{alter:true} if you want to make changes in existing table in accordance with this table
    insertCategories();
    console.log('Category  table created succesfully');
    
}
async function insertCategories()
{
await Categories.bulkCreate([{
name:"Mobile Phones",description:"Mobile Description",
},
{
    name:"TV",description:"Mobile Description",
    },{
        name:"Laptop",description:"Laptop Description",
        }
    ])}
//create to only one row for multiple row use Bulkcreate
async function getCategories(){
    let selectedIds=await Categories.findAll({where:{[Sequelize.Op.and]:[{id:2},{name:"TV"}]}});//sql query using sequelize 
    console.log(JSON.stringify(selectedIds));
    let categories= await Categories.findAll();
    // console.log(JSON.stringify(categories));
}
// createTable();
getCategories();