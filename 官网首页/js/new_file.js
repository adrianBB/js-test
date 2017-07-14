$(function(){
	//头部导航弹入、弹出
	$("#topop .header ul li:first").mouseenter(function(){
			$("#topop .hover-list-1").show();
		});
	$("#topop .header ul li:first").mouseleave(function(){
			$("#topop .hover-list-1").hide();
		});
	$("#topop .header ul li:eq(1)").mouseenter(function(){
			$("#topop .hover-list-2").show();
		});
	$("#topop .header ul li:eq(1)").mouseleave(function(){
			$("#topop .hover-list-2").hide();
		});
	$("#topop .header ul li").mouseenter(function(){
			$(this).css("background-color","#eaf2ff");
	})
	$("#topop .header ul li").mouseleave(function(){
			$(this).css("background-color","#FFFFFF");
	})
	$("#topop .header p").mouseenter(function(){
			$(this).css("background-color","#eaf2ff");
			$("#topop .hover-list-3").show();
	})
	$("#topop .header p").mouseleave(function(){
			$(this).css("background-color","#FFFFFF");
			$("#topop .hover-list-3").hide();
	})
	//nav里面的li鼠标移入时添加下划线
	$("#products .product").mouseenter(function(){
		$(this).css("border-color","#003395").css("opacity","0.6");		
	});
	$("#products .product").mouseleave(function(){
		$(this).css("border-color","#CCCCCC").css("opacity","1");		
	});
	$("#topop a,#footer a,#nav a,#products a,#list a,#white a,.contents a,.colume a").mouseenter(function(){
		$(this).css("opacity","0.7");
	})
	$("#topop a,#footer a,#nav a,#products a,#list a,#white a,.contents a,.colume a").mouseleave(function(){
		$(this).css("opacity","1");
	})
	$("#nav .nav-list ul li").mouseenter(function(){
		$(this).css("border-bottom","1px solid blue")
	})
	$("#nav .nav-list ul li").mouseleave(function(){
		$(this).css("border-bottom","none")
	})
	//头部导航部分弹入、弹出
	$("#topop .hover-list-1").mouseenter(function(){
		$(this).show();
		$("#topop .header ul li:first").css("background-color","#eaf2ff");
	})
	$("#topop .hover-list-1").mouseleave(function(){
		$(this).hide();
		$("#topop .header ul li:first").css("background-color","#FFFFFF");
	})
	
	$("#topop .hover-list-2").mouseenter(function(){
		$(this).show();
		$("#topop .header ul li:eq(1)").css("background-color","#eaf2ff");
	})
	$("#topop .hover-list-2").mouseleave(function(){
		$(this).hide();
		$("#topop .header ul li:eq(1)").css("background-color","#FFFFFF");
	})
	
	$("#topop .hover-list-3").mouseenter(function(){
		$(this).show();
		$("#topop .header p").css("background-color","#eaf2ff");
	})
	$("#topop .hover-list-3").mouseleave(function(){
		$(this).hide();
		$("#topop .header p").css("background-color","#FFFFFF");
	})
	
	//开始淡入、淡出banner图
$(function(){
		// 轮播图开始
	  $("#container").hover(function(){
	  	$("#prev").stop().fadeIn();
	  	$("#next").stop().fadeIn();
	  	clearInterval(timer);
	
	  },function(){
	  	$("#prev").stop().fadeOut();
	  	$("#next").stop().fadeOut();
	  	timer = setInterval(move,3000);
	  })
	  var $img = $("#container li"), //所有待轮播显示的图片盒子
	  	  $len = $img.length, // 图片张数
	  	  $currntIndex = 0, // 当前显示图片索引
	  	  $square = 0,// 用来控制小圆点
	  	  $nextIndex = 1,
	  	  timer = null,
	  	  flage = false; // 即将显示图片的索引
	  	  	// 实现自动轮播效果
	  	  	// 动态创建小圆点
  	  	var span = "";
  	  	for(var i = 0;i<$len;i++){
  	  		span += "<span></span>"
  	  	}
  	  	// 将$span中字符串表示的元素节点包装到jQuery对象中
  	  	// 添加到 #pages中
  	  	$(span).appendTo("#pages").first().addClass("curr");

  	  	// 两侧按钮部分
  	  	$("#next").click(function(){
  	  		move();
  	  		flage = true;
  	  	});
  	  	$("#prev").click(function(){
  	  		$currntIndex = $currntIndex-1;
  	  		$square = $square -1;
  	  		if($currntIndex || $square <0){
  	  			$currntIndex = $len-1;
  	  			$square = $spanlen-1;
  	  		}
  	  		console.log($currntIndex,$square)
  	  		move();
  	  		flage = true;
  	  	})
  	  	// 添加小圆点鼠标移入事件
  	  	$("#pages").delegate("span","mouseenter",function(){
  	  		var $_index = $(this).index();
  	  		var $that = $(this);
  	  			$(this).addClass("curr").siblings().removeClass("curr");
  	  			$img.eq($_index).stop().fadeIn(600).siblings().fadeOut();
  	  			$square = $currntIndex =$_index;	  			
  	  	})
  	  	 var $spanlen = $("#pages span").length;
  	  	 // 开启定时器
  	  	timer = setInterval(move,3000);
  	  	function move(){
  	  		$currntIndex++;
  	  		if($currntIndex > $len-1){
  	  		$currntIndex = 0; // 假如索大于图片的索引号就跳转到0
  	  		} 
  	  		$img.eq($currntIndex).fadeIn(600).siblings().fadeOut();
  	  		$square++;
  	  		if($square > $spanlen-1){
  	  		$square = 0; // 假如索大于小按钮的索引号就跳转到0
  	  	}
  	  	$("#pages span").eq($square).addClass("curr").siblings("span").removeClass("curr");
  	  	}

  	  	// 轮播结束

	})
//点击框 回到顶部
	$("#top_btn").click(function(){
		$("html,body").animate({"scrollTop":0},1000);
	})
	
	var $height = $("#container").outerHeight();
	
		$(window).scroll(function(){
			$H = $(document).scrollTop();
			if($H > $height){
  	 			$("#top_btn").stop().fadeIn(600);
  	 		}else{
  	 			$("#top_btn").stop().fadeOut(600);

  	 		}
		})
	
})

  	  	//侧边栏结束
  	  	// 首页结束
        // 吸顶部分
    $(function(){
       var	$H = $("#topop").height();
       	console.log($H);
        $(window).scroll(function(){
        	var $DH = $(document).scrollTop();
        	console.log($DH);
        	if($DH > $H){
            $("#topop").css({
              "position":"fixed",
              "top":0,
              "left":0,
              "z-index":1000
            });
            $("#container").css("margin-top",$("#topop").height());
        	}else{
            $("#topop").css({
              "position":"static"
        	})
            $("#container").css("margin-top",0);
          
        }
        })
     }) 
        // 吸顶部分结束*/



		
	



	
