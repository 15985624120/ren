// 页面滚动事件 
window.onscroll=function(){
	var onscroll=document.body.scrollTop
		||document.documentElement.scrollTop;
	//console.log(onscroll)
	var $div=document.getElementById('neirongt')
	var nav_div=$div.children;
	// console.log(nav_div[1])
	if(onscroll>720){
		$div.style='position: fixed;top:0px;'
		nav_div[0].className='nav_ba'
	}else if(onscroll<766){
		$div.style='position:none;'
		nav_div[0].className=''
	}
}
// 轮播图
var d2=document.getElementById('d2')
console.log(d2)
var i=0;
setInterval(function(){
	 i-=1920
	 if(i==-1920){
			d2.className='actver'
	 }
	 d2.style=`margin-left: ${i}px;`  
	 if(i<-9600){
		d2.className=''
		i=0
		d2.style=`margin-left: ${i}px;`
	 }
},4000)