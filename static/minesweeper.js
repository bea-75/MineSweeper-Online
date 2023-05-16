$(document).ready(function() {
	
	var checked = false;
	
	$(".block").click(function() {
		if ($('button').hasClass('check')){
			checked = true;
		}
		else {
			checked = false;
		}
		
		
		if (checked == false) {
			$(this).addClass("check");
			$(this).removeClass("block");
			$(this).removeClass("text-success");
		}
		if (checked == true) {
			$(this).removeClass("check");
			$(this).addClass("block");
			$(this).addClass("text-success");
		}
	});
	
	$(".flag").click(function() {
		if ($('button').hasClass('check')) {
			$('.check').load('flag')
			$('.check').addClass("block");
			$('.check').addClass("text-success");
			$('.check').removeClass("check");
			checked = false;
		}
	});
	
	$(".destroy").click(function(){
		if ($('button').hasClass('check')) {
			$('.check').addClass("destroyed");
			$('.check').removeClass("check");
			checked = false;
		}
	});
});