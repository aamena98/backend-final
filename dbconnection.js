var mysql=require('mysql');
 var connection=mysql.createPool({
 
// host:'localhost',
//  user:'root',
//  password:'',
//  database:'school_management'
 host:'ksaschool.db.9462939.7e0.hostedresource.net',
 user:'ksaschool',
 password:'Kavisha@9898',
 database:'ksaschool'
});
 module.exports=connection;