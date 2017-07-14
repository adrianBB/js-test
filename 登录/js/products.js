$(function(){
	$(".banner .banner-left .small").on("click",function(){
		var $index = $(this).index();
		$(".banner .banner-left .big").eq($index).css("display","block").siblings(".big").hide();
		$(".banner .bigimg .biggest").eq($index).show().siblings(".biggest").hide();
	})
	$(".box").hover(function(){
		$(".mark").stop().fadeIn();
		$(".datu").stop().fadeIn();
	},function(){
		$(".mark").stop().fadeOut();
		$(".datu").stop().fadeOut();
	})
		// 获取.mark的坐标值
			// 定义变量x,y分别表示big左、上边到left左、上边的距离
			$x = 0;
			$y = 0;

			$(".box").mousemove(function(e){
				e = e || event;
				$x = e.pageX  - $(this).offset().left - ($(".mark").width() / 2);//
				$y = e.pageY - $(this).offset().top - ($(".mark").height() / 2);//
				console.log($x);
				if($x < 0)
					$x = 20;
				else if ($x > $(this).width() - $(".mark").width()) 
					$x = $(this).width() - $(".mark").width()+20;
				if($y < 0) 
					$y = 0;
				else if ($y > $(this).height() - $(".mark").height()) 
					$y = $(this).height() - $(".mark").height();

				$(".mark").css("top" , $y + "px");
				$(".mark").css("left" , $x + "px");
				// 根据big的移动情况，改变biggest里图片的位置
				$(".banner .bigimg .biggest img").css("top", - $y * 1.2 +"px");
				$(".banner .bigimg .biggest img").css("left", - $x * 1.2 +"px");
			})	
})


// 放大镜部分
	$(".navimg li").mouseenter(function(){
		var $index = $(this).index();
		$(".small img").attr({src:"../imgsshopping/big"+$index+".jpg"});
		$(".big img").attr({src:"../imgsshopping/big"+$index+".jpg"});
		$(".navimg li").eq($index).addClass("current").siblings("li").removeClass("current");

		
	})
		// 鼠标移入显示
		$(".small").hover(function(){
			$(".mask").stop().fadeIn();
			$(".big").stop().fadeIn();
		},function(){
			$(".mask").stop().fadeOut();
			$(".big").stop().fadeOut();
		})

			// 获取.mask的坐标值
			// 定义变量x,y分别表示small左、上边到left左、上边的距离
			$x = 0;
			$y = 0;

			$(".small").mousemove(function(e){
				e = e || event;
				$x = e.pageX  - $(this).offset().left - ($(".mask").width() / 2);//
				$y = e.pageY - $(this).offset().top - ($(".mask").height() / 2);//

				if($x < 0)
					$x = 0;
				else if ($x > $(this).width() - $(".mask").width()) 
					$x = $(this).width() - $(".mask").width();
				if($y < 0) 
					$y = 0;
				else if ($y > $(this).height() - $(".mask").height()) 
					$y = $(this).height() - $(".mask").height();

				$(".mask").css("top" , $y + "px");
				$(".mask").css("left" , $x + "px");
				// 根据small的移动情况，改变right里图片的位置
				$(".big img").css("top", - $y * 1.2 +"px");
				$(".big img").css("left", - $x * 1.2 +"px");
			})	





		