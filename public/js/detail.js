window.onload=function(){
	//获取url
	//截取出？以后的内容
	//http://127.0.0.1:8080/detail.html?sid=1
	var oo=location.search;
	//把oo的值按等号分隔
	oo=oo.split('=');
	// console.log(oo)
	//分割后返回的值是数组
	//["?input_name", "值"]
	//oo[1]就是url地址上的查询内容
	// console.log(oo[1])
	//因为通过地址栏传递的数据中文会乱码
	//即通过这个东西转为中文
	var title = decodeURI(oo[1]);
	//准备发送Ajax请求
	var xhr=new XMLHttpRequest()
	xhr.open('GET',`/hw_user/detail/${title}`,true)
	xhr.send()
	xhr.onreadystatechange=()=>{
		if(xhr.readyState==4&&xhr.status==200){
			var r=xhr.responseText;
			r=JSON.parse(r)
			let s=r[0]
			console.log(s)
			//开始绑定数据
			//绑定大图
			text_title1.innerHTML=s.title1;
			leftImg.src=`image/${s.xq_img}`;
			rightImg.src=`image/${s.xq_img}`;
			title2.innerHTML=s.title2;
			praey.innerHTML=`￥${s.preay.toFixed(2)}`
		}
	}
	
	//获取放大镜的元素对象
	var pdn=document.getElementById('pdn');
	//页面滚动事件
	window.onscroll=function(){
		//获取页面高度
		var onscroll=document.body.scrollTop
			||document.documentElement.scrollTop;
		// console.log(onscroll)
		// console.log(onscroll)
		if(onscroll>178&&onscroll<400){
			pdn.className='posand_flex'
		}else if(onscroll<178){
			pdn.className=''
		}else if(onscroll>400){
			// console.log(123)
			pdn.className='posand_flex1'
		};
	};
	// 放大镜
	var obj = document.getElementById('obj');
	var leftImg = document.getElementById('leftImg');
	var darg = document.getElementById('darg');
	var rightShow = document.getElementById('rightShow');
	var rightImg = document.getElementById('rightImg');
	obj.onmousemove=function(e){    //当鼠标在obj上面移动的事件
	    var e = e || window.event;  //获取时间对象 并且做兼容处理
	    darg.style.display='block';  //模拟放大镜的图标显示
	    rightShow.style.display='block';  //放大镜的区域显示
	    var lefts = e.clientX - obj.offsetLeft - darg.offsetWidth/2;  
	    //移动时鼠标距离浏览器左侧距离   减去  obj距离浏览器的左侧距离  减去  放大镜图标实际宽度（包括边线等）的一半
	    //就是obj内部放大镜图标距离obj内边的左侧距离
	    var tops = e.clientY - obj.offsetTop - darg.offsetHeight/2;
	    //移动时鼠标距离浏览器顶部距离   减去  obj距离浏览器的顶部距离  减去  放大镜图标实际高度的一半
	    //就是obj内部放大镜图标距离obj内边的顶部距离
	    var maxmoveX = obj.clientWidth - darg.offsetWidth;
	    //移动时 obj的可视宽度（不包括边线滚动条等） 减去  darg放大镜图标的实际宽度
	    //就是obj内部减去放大镜剩余的宽度 也就是可以左右移动的距离
	    var maxmoveY = obj.clientHeight - darg.offsetHeight;
	    //移动时 obj的可视高度 减去 darg放大镜图标的实际高度度
	    //移动obj内部减去放大镜剩余的高度 也就是可以上下移动的距离
	    if(lefts > maxmoveX){ //如果移动的距离超过可以左右移动的距离就把可以移动的距离赋值 防止放大镜溢出obj右侧
	        lefts = maxmoveX;
	    };
	    if(tops > maxmoveY){  //如果移动的距离超过可以上下移动的距离就把可以移动的距离赋值 防止放大镜溢出obj下方
	        tops = maxmoveY;
	    };
	    if(lefts < 0){  //如果移动的左距离小于0了 就把0赋给移动的距离 防止放大镜溢出obj 左侧
	        lefts = 0;
	    };
	    if(tops < 0){  //如果移动的上距离小于0了 就把0赋值给移动的距离 防止放大镜溢出obj 上侧
	        tops = 0;
	    };
	    darg.style.left = lefts + 'px';  //把鼠标移动的左右距离赋值给放大镜 让放大镜跟着移动
	    darg.style.top = tops + 'px';   //把鼠标移动的上下距离赋值给放大镜 让放大镜跟着移动
	    var num = rightImg.offsetWidth/leftImg.offsetWidth; 
	    //大的图片 除以小的图片 得到要放大的倍数
	    rightShow.scrollLeft = darg.offsetLeft * num;  
	    //把放大镜距离左侧的距离乘以倍数然后赋值给包含大图片的那个元素（对象）
	    //那么这个元素内部就应该有距离左侧的scrollLeft值但是因为溢出隐藏了 所以滚动条不显示 就隐藏了
	    rightShow.scrollTop = darg.offsetTop * num;
	    //把放大镜距离上侧的距离乘以倍数然后赋值给包含大图片的那个元素（对象）
	    //那么这个元素内部就应该有距离左侧的scrollTop值但是因为溢出隐藏了 所以滚动条不显示 就隐藏了
	};	
	obj.onmouseout=function(){
	    darg.style.display='none';
	    rightShow.style.display='none'; 
	    //鼠标溢出obj时隐藏
	};	
	
	
	//购买数量的+和-
	//获取Button
	var btn=document.getElementById('button').querySelectorAll('button');
	//获取input
	var input=document.getElementsByClassName('input_wh')[0];
	//绑定事件
	for(var key of btn){
		key.onclick=function(){
			var n=parseInt(input.value);
			if(this.innerHTML=='+'){
				n++;
			}else{
				if(n>1){
					n--;
				};
			};
			input.value=n;
		};
	};
};

