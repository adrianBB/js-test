$(function(){
	//small-banner开始淡入淡出轮播
	var $img = $("#small-banner .item"), //所有待轮播显示的图片盒子
	  	  $len = $img.length, // 图片张数
	  	  $currntIndex = 0, // 当前显示图片索引
	  	  $nextIndex = 1,
	  	  timer = null,
	  	  flage = false; // 即将显示图片的索引
	  	  timer = setInterval(move,3000);
  	  	function move(){
  	  		$currntIndex++;
  	  		if($currntIndex > $len-1){
  	  		$currntIndex = 0; // 假如索大于图片的索引号就跳转到0
  	  		}
  	  		$img.eq($currntIndex).fadeIn(600).siblings().fadeOut();
  	  	}
})
$(function(){
	//container-animated开始淡入淡出轮播
	var $img = $("#container-animated .item"), //所有待轮播显示的图片盒子
	  	  $len = $img.length, // 图片张数
	  	  $currntIndex = 0, // 当前显示图片索引
	  	  $nextIndex = 1,
	  	  timer = null,
	  	  flage = false; // 即将显示图片的索引
	  	  timer = setInterval(move,3000);
  	  	function move(){
  	  		$currntIndex++;
  	  		if($currntIndex > $len-1){
  	  		$currntIndex = 0; // 假如索大于图片的索引号就跳转到0
  	  		} 
  	  		$img.eq($currntIndex).fadeIn(600).siblings().fadeOut();
  	  	}
})
//JS_HP_homePage开始轮播
$(function(){
	var $imgs = $("#JS_HP_homePage .item img"),
		//轮播的图片张数
			len = $imgs.length,
			//获取轮播图片盒子宽度
			imgWidth = $imgs.outerWidth(),
			//当前显示的图片的索引
			currentIndex = 0,
			//即将显示的图片的索引
			nextIndex = 1,
			//运动函数
			timer = null;
			//运动动画是否正在由认为触发
		
			var _first = $imgs.first().clone(true),
				_last = $imgs.last().clone(true);
				
				$(".carousel-inner").append(_first).prepend(_last);
				len += 2;//图片张数增加2
				// 设置  宽度
				$(".carousel-inner").css("width", len * imgWidth);
				// 初始显示第1张图片内容
				$(".carousel-inner").css({top:0, left:-1*imgWidth});
				
		setInterval(move,1000)
		function move(){
			var _left = -1 * nextIndex * imgWidth,
			currentIndex = nextIndex;
				nextIndex++;
			$(".carousel-inner").animate({left:_left}, 10000, function(){
					isRunning = false;
					if (nextIndex >= len){
						currentIndex = 0;
						nextIndex = -1;
						$(".carousel-inner").css("left", -1*imgWidth);
					}
			});
		}
})
