try {
    (function(a,b,c,d){
    a[c]=function(){a[c]['ar']=a[c]['ar']||[];a[c]['ar'].push(arguments);};
    var s=b.createElement('script');s.async = 1;s.src='//t.agrantsem.com/js/agt.js';
    var r=b.getElementsByTagName('script')[0];r.parentNode.insertBefore(s,r);
    })(window,document,'_agtjs','script');
    _agtjs('init','AG_631531_VFDV','$website$');
    _agtjs('trackPv');
    
    var agtGetTopUrl = function() {
        var win=window;
        var doc=document;
        var topwin=window.top || window.parent || window;
    
        var localUrl = "";
        try{
            localUrl=topwin.location.href;
        }catch(err){
            localUrl=doc.referrer || win.location.href;
        }
        return localUrl;
    };
    var agtTopUrl = agtGetTopUrl();
    
    var agtCheckString = function(regular, str) {
        var re = new RegExp(regular);
        return re.test(str);
    };
    
    var agtBindClick = function(element,fn){
        if(element.attachEvent){
            element.attachEvent('onclick',fn);
        }else if(element.addEventListener){
            element.addEventListener('click',fn);
        }
    };
    
    var agtBindEventByTimer = function(selector,fn){
        var interval=setInterval(function(){
        	if(!_agtjs.Sizzle){return}
            var elements=_agtjs.Sizzle(selector);
            if(elements && elements.length>0){
                clearInterval(interval);
                for(var i in elements){
                	agtBindClick(elements[i],fn);
                }
            }
        },1000);
    };
	var getUrlParam = function(key) {
		var url = "";
		try {
			url = window.top.location.search;
		} catch (e) {
			url = window.location.search;
		}
		try {
			if (url.indexOf("?") != -1) {
				var str = url.substr(1);
				strs = str.split("&");
				for (var i = 0; i < strs.length; i++) {
					if (strs[i].split("=")[0] == key){
						var param_arr=strs[i].split("=");
						if (param_arr.length > 1) {
							return param_arr[1];
						}
					}
				}
			}
		} catch (e) {
			return "";
		}
		return "";
	};



    function agt_207(){
		var pname="";
		var pprice = "";
		try{
		pname = _agtjs.Sizzle("div.panel.panel-default.double-border div.panel-header")[0].innerText.replace(/[\r\n]/g,"");
		pprice = _agtjs.Sizzle("span.price.amount.role-salePrice")[0].innerText.replace(/[^\d\.]/g,"");
		}catch(e){}
        _agtjs('loadEvent',{atsev:207,'atsp1':pname,'atsp2':pprice});
    }
    if (agtCheckString('/',agtTopUrl)) {
		agtBindEventByTimer('#J_PD_cartBtn',agt_207);
    }

    function agt_206(){
		var orderid = ""
		var ordercost = ""
		try{
		orderid = _agtjs.Sizzle("span.msg-order")[0].innerHTML
		ordercost = _agtjs.Sizzle("span.price-style")[0].innerHTML.replace(/[^\d\.]/g,"")
		}catch(e){}
        _agtjs('loadEvent',{atsev:206,'atsp1':'$商品名称$','atsp2':ordercost,'atsp3':orderid});
    }
    if (agtCheckString('/flow.php\\?a=done&id=',agtTopUrl)) {
	
	var interval_206=setInterval(function(){
				if(!_agtjs.Sizzle){return}
				clearInterval(interval_206);
				agt_206();
			},500)
    }

    function agt_200(){
		var mobile = "";
		try{
			mobile = _agtjs.Sizzle("#mobile")[0].value;
			
			if(/^\s*1[3-9]\d{9}\s*$/.test(mobile))
			{}
			else{  return}
			
			var captcha = _agtjs.Sizzle("#captcha")[0].value;
			if(/^\w{4,}$/.test(captcha))
			{}
			else
			{return}
		}
		catch(e){}
        _agtjs('loadEvent',{atsev:200,'atsp1':mobile});
    }
    if (agtCheckString('/profile.php\\?a=register',agtTopUrl)) {
        
		agtBindEventByTimer('#mobileCaptcha',agt_200);
    }

    function agt_203(){
		var pname="";
		var pprice = "";
		try{
	 	pname = _agtjs.Sizzle("div.panel.panel-default.double-border div.panel-header")[0].innerText.replace(/[\r\n]/g,"");
		pprice = _agtjs.Sizzle("span.price.amount.role-salePrice")[0].innerText.replace(/[^\d\.]/g,"");
		}catch(e){}
		
        _agtjs('loadEvent',{atsev:203,'atsp1':pname,'atsp2':pprice,'atsp3':'$ip$'});
    }
    if (agtCheckString('/',agtTopUrl)) {
        agtBindEventByTimer('#J_PD_buyNowBtn',agt_203);
    }

    function agt_202(){
		var mobile = "";
		try{mobile = _agtjs.Sizzle("a.role-logged-user[rel='nofollow']")[0].innerHTML;
		}catch(e){}
        _agtjs('loadEvent',{atsev:202,'atsp1':mobile});
    }
    if (agtCheckString('/',agtTopUrl)) {
        if(/^.+\/profile.php\?a=login$/.test(window.document.referrer))
		{
			var interval_202=setInterval(function(){
					if(!_agtjs.Sizzle){return}
					clearInterval(interval_202);
					agt_202();
				},500)
		}
    }

    function agt_208(){
		var orderid = getUrlParam("oid");
        _agtjs('loadEvent',{atsev:208,'atsp1':'$商品名称$','atsp2':'$金额$','atsp3':orderid});
    }
    if (agtCheckString('/payment.php\\?a=paymentSuccess&oid=',agtTopUrl)) {
        agt_208();
    }

	function agt_209(){
		
		try{
		for(var i=0;i<_agtjs.Sizzle("a.fragment").length;i++)
		{
			var pname = ""
			var pprice = ""
			var tcost = ""
			pname=_agtjs.Sizzle("a.fragment")[i].innerText;
			pprice = _agtjs.Sizzle("div.col-xs-8.detail-list-single-price.text-left")[i].innerText.replace(/[^\d\.]/g,"");
			tcost = _agtjs.Sizzle("div.col-xs-8.cart-product-price.price-margin-left")[i].innerText.replace(/[^\d\.]/g,"")
			_agtjs('loadEvent',{atsev:209,'atsp1':pname,'atsp2':pprice,'atsp3':tcost});
		}
		}catch(e){}
        
    }
	
    if (agtCheckString('/flow.php\\?productId=\\w+&productModel=\\w+&num=',agtTopUrl)
	|| agtCheckString('/flow.php\\?t=',agtTopUrl)) {
	var interval_209=setInterval(function(){
			if(!_agtjs.Sizzle){return}
			clearInterval(interval_209);
			agt_209();
		},500)
    }

} catch (err) {
    console.log('err:' + err);
}
