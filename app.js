const express=require('express');
//引入中间件
const bodyParser=require('body-parser');
//用户路由器
const hw_user=require('./nuyou/hw_user.js');
const app=express();
//设置跨域问题
// app.all('*', function(req, res, next) {
// 											//允许访问的地址  如果是*号代表可以让任何地址访问
//     res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//允许访问的类型
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
//监听端口
app.listen(8080);
//托管静态资源
app.use(express.static('./public'));

//应用中间件
app.use( bodyParser.urlencoded({
	extended:false
}) );
//挂载

app.use('/hw_user',hw_user);

