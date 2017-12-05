//当页面加载时
$(function(){
	
//	/* 进入时加载 */	
	$("#dynamic").load("dynamic/chat-list.html");
	$.get("../js/router-chat.js")

	//点击聊天时
	$("#menu-chat").click(function(){
		
		$("#dynamic").load("dynamic/chat-list.html");
		$("#nav_center_content").html("微信(26)");
		$("#function_img").show()
	})
	//点击发现时
	$("#menu-discover").click(function(){
		
		$("#dynamic").load("dynamic/discover.html")
		$("#nav_center_content").html("发现");
		
		$("#function_img").hide();
		
//		$("#function_img").hide(2000 , function(){
//			alert("我没啦...")}
//		)
		
	})
	
	
	
	

});
