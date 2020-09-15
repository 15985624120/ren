//引入
const express=require('express');
//引入数据库连接池模块
const pool=require('./pool.js');
//创建路由对象
const r=express.Router();
//1添加路由
//所有的get方法都能再浏览器验证,其它的方法都不行
//写完get接口,现在浏览器验证接口,
//用户路由
//查询用户是否存在接口
r.get('/v1/user/:the',(req,res)=>{
	// console.log('123456')
	var poher=req.params.the; 
	var sql='Select * from hw_user where poher=?';
	// console.log(poher)
	pool.query(sql,[poher],(err,result)=>{
		// console.log(result)
		// console.log(result.length)
		if(err) throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		};
	});
});
//登录接口
r.get('/v1/user_name/:uname&:upwd',(req,res)=>{
	var poher=req.params.uname;
	var upwd=req.params.upwd;
	var sql='Select * from hw_user where poher=? and upwd=?';
	pool.query(sql,[poher,upwd],(err,result)=>{
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		};
	});
});
// 注册接口
r.post('/v1/list',(req,res)=>{
	var obj=req.body;
	var sql='INSERT INTO hw_user SET ?';
	pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows==1){
			res.send('1');
		}else{
			res.send('0');
		};
		
	});
});
//首页数据接口
					//  跨域
r.get('/index',(req,res,next)=>{
	console.log('123')
	var sql='select ild,index_img,title1,title2,price from hw_index_1 ';
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		//设置跨域									设置同意访问的地址
		res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//允许访问的类型
		res.header("X-Powered-By",' 3.2.1')
		//设置浏览器解析返回数据的的编码类型
		res.header("Content-Type", "application/json;charset=utf-8");
		next();
		//
		res.send(result);
	});
});
// 分类请求接口
r.get('/bjb/:myname',(req,res)=>{
	var $req=req.params.myname;
	console.log($req)
	// var n=['%'+]
	var sql=`SELECT * FROM hw_bjb WHERE classify LIKE ?`;
	let param = [ "%"+$req+"%"]
	pool.query(sql,param,(err,result)=>{
		if(err) throw err;
		res.send(result)
		// console.log(result)
	});
});
// 详情页接口   detail
r.get('/detail/:sid',(req,res)=>{
	var ild=req.params.sid;
	let sql='select ild,xq_img,title1,title2,preay from hw_detail WHERE ild=?';
	pool.query(sql,[ild],(err,result)=>{
		if(err) throw err;
		console.log(result)
		res.send(result)
	});
});

// 插入数据接口
r.post('/v1/hw_index_1',(req,res)=>{
	var obj=req.body;
	console.log(obj)
	var sql='INSERT INTO hw_index_1 SET ?'
	pool.query(sql,[obj],(err,result)=>{
			
	})
})

//共享路由文件
module.exports=r;









