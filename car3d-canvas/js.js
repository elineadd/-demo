//定义一个对象

var car3d={
	//初始化
	init:function(){
		this.canvas=document.getElementById('canvas')
		this.ctx=canvas.getContext('2d')
		this.imgNum=36//图片数量
		this.imgObj=[]//加载图片列表
		this.imgIndex=0//记录当前绘制的索引
		this.imgWidth=1440//图片宽度
		this.imgHeight=810//图片高度
		this.initImg()
		
	},
	//加载所有图片到内存
	initImg:function(){
		var flag=1
		for(var i=1;i<=this.imgNum;i++)
		{
			var img =new Image()
			img.src='img/'+i+'.jpg'
			this.imgObj.push(img)
			this.imgObj[i-1].onload = ()=>{
		       //第i张图片加载完成
		       flag++
		       if( flag == this.imgNum){
		          //全部图片加载完成
				  console.log('全部加载完成')
				  this.autoPlay()
		       }
		    }
		}

	},
	//自动播放
	autoPlay:function(){
		setInterval(()=>{
			this.imgIndex++
			if(this.imgIndex===this.imgNum) this.imgIndex=0
			this.drawImg()
		},200)
	},
	//画布绘制图片
	drawImg:function(){
		//清除画布内容
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
		//图片，x，y,画布宽度，图片高度
		//等比例 画布宽/图片宽=画布高/图片高
		var biLi=this.canvas.width/this.imgWidth
		var yNum=(this.canvas.height-biLi*this.imgHeight)/2
		this.ctx.drawImage(this.imgObj[this.imgIndex],0,yNum,this.canvas.width,this.imgHeight*biLi)
	}
}

window.onload=function(){
	car3d.init()
}