set names utf8;
drop database if exists hw;
create database hw CHARSET=utf8;
use hw;
/**用户信息**/
CREATE TABLE hw_user(
  rid int(11) PRIMARY KEY AUTO_INCREMENT,
  the varchar(12) DEFAULT NULL,
  poher varchar(11) DEFAULT NULL Unique,#唯一约束
  upwd varchar(16) DEFAULT NULL,
  emile varchar(32) DEFAULT NULL,
  dataof bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/**收货地址信息**/
CREATE TABLE hw_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名

  is_default BOOLEAN          #是否为当前用户的默认收货地址
);
/**购物车条目**/
CREATE TABLE hw_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);
/**用户订单**/
CREATE TABLE hw_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
);
/**用户订单**/
CREATE TABLE hw_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);
/**index_1首页**/
create table hw_index_1(
	ild int(11) PRIMARY KEY AUTO_INCREMENT,
	index_img varchar(68),
	title1 varchar(32),
	title2 varchar(32),
	price varchar(6)
);
/**index_1纯图片**/
create table hw_index_1_img(
	gid int(11) PRIMARY KEY AUTO_INCREMENT,
	index_img varchar(38)
);

/**index**/
create table hw_index(
	sid int(11) PRIMARY KEY AUTO_INCREMENT,
	index_img varchar(68),
	title1 varchar(32),
	title2 varchar(32),
	price varchar(6)
);
/**index_img**/
 create table hw_index_img(
 	fid int(11) PRIMARY KEY AUTO_INCREMENT,
 	index_img varchar(38)
 );
 /**笔记本信息**/
 create table hw_bjb(
	bjid int PRIMARY KEY AUTO_INCREMENT,
	bj_img varchar(32),
	title varchar(64),
	preay int(11)
 );
 