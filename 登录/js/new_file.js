$(function(){
	$("#btn").on("click",function(){
		var reg = /^\d{11}$/;
		//获取输入信息
		var str = $("#username-1").val();
		
		var array=reg.exec(str);
		if(array === null){
			$("#error-1").html("号码错误").css("color","red");	
		}
		if(str === null){
			$("#error-1").html();
		}
	})
	$("#btn").on("click",function(){
		var reg = /^\w$/;
		//获取输入信息
		var str = $("#username-2").val();
		var array=reg.exec(str);
		if(array === null){
			$("#error-2").html("密码错误").css("color","red");	
		}
	})
})

