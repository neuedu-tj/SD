$(function() {
	
//	var now = new Date();
//
//	$("#singal_center").html(now.getHours()+" : " + now.getMinutes() )

	setInterval(function() {
		
		//增长
		var curr = $('#battery_body').width();
		
		if( curr >= 36) {
			$('#battery_body').width(4);
		} else {
			$('#battery_body').width(curr + 2)
		}
		
		
		//变色
		if($('#battery_body').width()<=10) {
			$('#battery_body').css("background-color" , "red");
		} else if( $('#battery_body').width()>10 && $('#battery_body').width()<28  ) {
			$('#battery_body').css("background-color" , "yellow");
		} else {
			$('#battery_body').css("background-color" , "lawngreen" );
		}
		
		
//		var now = new Date();
//		
//		$("#singal_center").html(now.getHours()+" : " + now.getMinutes() )
		
	}, 1000);
	
	
	
	
	
})
