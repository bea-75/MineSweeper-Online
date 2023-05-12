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
		}
	});
	
	$(".check").click(function() {
		$(this).removeClass("check");
		$(this).addClass("block");
	});
});