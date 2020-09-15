//引入mysql
const mysql=require('mysql');
//连接池
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'hw',
  connectionLimit:20
});
//共享
module.exports=pool;