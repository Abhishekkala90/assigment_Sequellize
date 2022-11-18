
let Users=require("./../Model/Users")


async function getAllUsers()            //it will be a asynchronous call
{
let users= await Users.findAll({where:{email:"srk@relevel.com"}});
console.log(JSON.stringify(users));
}
getAllUsers();
