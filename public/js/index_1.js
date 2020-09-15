var $div=document.getElementById("nav")
	$div.innerHTML=`
		<div class="navbar_n">
			<div class="box d-flex justify-content-center">
				<div class="d1 nav_1 ">
					<ul class="list-unstyled d-flex mb-0">
						<li class='mx-2'><a target="_blank" href="index_1.html">首页</a></li>
						<li class='mx-2'><a href="">华为官网</a></li>
						<li class='mx-2'><a href="">荣耀官网</a></li>
						<li class='mx-2'><a href="">花粉俱乐部</a></li>
						<li class='mx-2'><a href="">V码(优购码)</a></li>
						<li class='mx-2'><a href="">企业购</a></li>
						<li class='mx-2'><a href="">Select Region</a></li>
						<li class='mx-2'><a href="">更多精彩<i class="iconfont">&#xe60c;</i></a></li>
					</ul>
				</div>
				<div class="d2 nav_2">
					<ul class="list-unstyled d-flex mb-0">
						<li class='mx-2'><a href="list.html" target="_blank">请登录</a></li>
						<li class='mx-2'><a href="dengku.html" target="_blank"> 注册</a></li>
						<li class='mx-2'><a href="">我的订单</a></li>
						<li class='mx-2'><a href="">客户服务<i class="iconfont">&#xe60c;</i></a></li>
						<li class='mx-2'><a href="">网站导航<i class="iconfont">&#xe60c;</i></a></li>
						<li class='mx-2'><a href="">手机版<i class=" iconfont">&#xe60c;</i></a></li>
						<li class='mx-2'><a href=""><i class="iconfont">&#xe63f;</i>购物车</a></li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 第二届导航 -->
		<div class="index">
			<div class="box_cen">
				<ul class="list-unstyled d-flex w1206_">
					<li class="li1"><a href=""><img src="image/huaweishaocheng.png" alt=""></a></li>
					<li class="li2 mr-4"><a href=""><img class="" src="image/huaweifenqu.png" alt=""></a></li>
					<li class="li2 mr-4"><a href=""><img src="image/rongyaozhuanqu.png" alt=""></a></li>
					<li class='nav_box mr-4'><a href="index.html" target="_blank">华为 P40 系列</a></li>
					<li class='nav_box mr-4'><a href="">荣耀30系列</a></li>
					<li class='nav_box mr-5'><a href="">安心居家</a></li>
					<li class="input_ my_input">
						<input id="input" type="text" AUTOCOMPLETE="OFF">
						<div>
							<a class="font_12 text-muted" href="javascript:;">p40</a>
							<a class="font_12 ml-1 text-muted" href="">荣耀30</a>
							<a onclick="input_value()" class="ml-2 text-muted" href="javascript:;"><i class="iconfont">&#xe60f;</i></a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	`;
	function input_value(){
		var $input=document.getElementById('input').value;
		//只有input的值不为空的时候才能进行跳转
		if($input!=''){
			location.href='search.html?input_name='+$input;
		}
		// console.log('123');
		// var $input=document.getElementById('input');
		// // console.log($input.value)
		// //创建异步函数
		// var xhr=new XMLHttpRequest();
		// //创建请求地址和和请求方法      true 是否异步发送
		// xhr.open('GET',`/hw_user/bjb/${$input.value}`,true);
		// //发送请求
		// xhr.send(null);
		// //接收请求
		// xhr.onreadystatechange=()=>{
		// 	if(xhr.readyState==4&&xhr.status==200){
		// 		var r=xhr.responseText;
		// 		r=JSON.parse(r)
					
		// 	}
		// }
	}
	//键盘事件                e是键盘事件对象
	document.onkeydown=function(e){
		//用e.keyCode 获取键盘的值
		var key=e.keyCode
		//此时此刻key得到的就是用户按下的键了
		if(key==13){
			input_value();
		}
	}
//等待页面加载完成之后才执行
window.onload=function(){
	
	// 
    var d2=document.getElementById('d2')//轮播第一张图片
    var a1=document.getElementById('a1')//左箭头
    var a2=document.getElementById('a2')//👉箭头
    var i=0;//图片移动距离初始化值
    function banla(){//自动轮播函数
    	 i-=1920
    	 if(i==-1920){
    		d2.className='actver'	
    	 }
    	 d2.style=`margin-left: ${i}px;`  
    }
    function cvt(){
    	 d2.className=''
    	 i=0
    	 d2.style=`margin-left: ${i}px;`
    }
    var t = setInterval(banla,3000);//调用自动轮播
    var k =setInterval(cvt,15600)//自动轮播给i清0
    a1.onmouseover=function(){//鼠标移入时清楚定时器
    	clearInterval(t)
    }
    a2.onmouseover=function(){//鼠标移入时清楚定时器
    	clearInterval(t)
    }
    a1.onmouseout=function(){//鼠标移出时激活定时器
    	t = setInterval(banla,3000)
    }
    a2.onmouseout=function(){//鼠标移出时激活定时器
    	t = setInterval(banla,3000)
    }
    
    a1.onclick=function onfun(){//左箭头事件
    	if(d2.style.transitionDuration==0){
    		if(i<0){
    			i+=1920;
    			d2.style=`margin-left: ${i}px;`
    		}else if(i==0){
    			i= -9600
    			d2.className='navbar_';
    			d2.style=`margin-left: ${i}px;`
    			onfun()
    			d2.className='actver'	
    		}
    	}else if(d2.style.transitionDelay!==0){
    		return
    	}
    	
    }
    a2.onclick=function youfun(){//👉箭头事件
    	console.log(d2.transitionstart)
    	if(d2.style.transitionstart){
    		return
    	}
    	//console.log(i)
    	if(i<=0&&i>=-7680){
    		d2.className='actver'
    		i-=1920;
    		d2.style=`margin-left: ${i}px;`
    	}else if(i== -9600){
    		console.log(i)
    		d2.className='';
    		i= 0
    		
    		// d2.style=`margin-left: ${i}px;`
    	}
    }
    	
    //请求首页商品数据数据
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=()=>{
		if(xhr.readyState==4&&xhr.status==200){
			var r=xhr.responseText;
			//把json字符串转为普通字符串
			r=JSON.parse(r)
			console.log(r)
			console.log(parseInt(r[0].price).toFixed(2))
			var nav=document.getElementsByClassName('rexiaosp')[0]
			var $ul=nav.querySelector('.rexiaosp ul:nth-child(1)')
			var $ul1=nav.querySelector('.rexiaosp ul:nth-child(2)')
			var $li=$ul.children  //获取父元素下所有的子元素
			var $li1=$ul1.children  //获取父元素下所有的子元素
								//第一个子元素
			for(var i=0;i<$li.length;i++){
				//给a标签赋值链接
				$li[i].querySelector('a').href=`detail.html?sid=`+r[i].ild;
				
				$li[i].firstElementChild.firstElementChild.firstElementChild
				.src=r[i].index_img;
				//        第一个子元素      下的第一个元素      下一个兄弟元素
				$li[i].firstElementChild.firstElementChild.nextElementSibling
				.innerHTML=r[i].title1;
				//
				$li[i].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling
				.innerHTML=r[i].title2;
				//							最后一个子元素
				$li[i].firstElementChild.lastElementChild
				.innerHTML=`￥${parseInt(r[i].price).toFixed(2)}`;
			}
			for(var i=0;i<$li1.length;i++){
				$li1[i].firstElementChild.firstElementChild.firstElementChild
				.src=r[i].index_img;
				//        第一个子元素      下的第一个元素      下一个兄弟元素
				$li1[i].firstElementChild.firstElementChild.nextElementSibling
				.innerHTML=r[i].title1;
				//
				$li1[i].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling
				.innerHTML=r[i].title2;
				//							最后一个子元素
				$li1[i].firstElementChild.lastElementChild
				.innerHTML=`￥${parseInt(r[i].price).toFixed(2)}`;
			}
		}
	}
	xhr.open('GET',`/hw_user/index`,true)
	xhr.send(null)

	
	
 }

