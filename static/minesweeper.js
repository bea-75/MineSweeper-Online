$(document).ready(function() {
	
	var checked = false;
	
	$(".block").click(function() {
		if ($('button').hasClass('check')){
			checked = true;
		} else {
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
		if ($('button').hasClass('check') && $('.check').hasClass('flagged')) {
			$('.check').load('unflag')
			$('.check').addClass("block");
			$('.check').addClass("text-success");

			if ($(".check").hasClass("bomb")) {
				$('.check').removeClass("flagged-right");
			}
			else {
				$('.check').removeClass("flagged-wrong");
			}
			
			$('.check').removeClass("flagged");
			$('.check').removeClass("check");
			checked = false;
		}
		else if ($('button').hasClass('check')) {
			$('.check').load('flag')
			$('.check').addClass("block");
			$('.check').addClass("text-success");
			$('.check').addClass("flagged");
			
			if ($(".check").hasClass("bomb")) {
				$('.check').addClass("flagged-right");
			}
			else {
				$('.check').addClass("flagged-wrong");
			}
			
			$('.check').removeClass("check");
			checked = false;
		}
	});
	
	$(".destroy").click(function(){
		if ($('button').hasClass('check') && $(".check").hasClass("bomb")) {
			$('.bomb').load('bomb')
			$(".bomb").removeClass("check");
			$(".bomb").removeClass("text-success");
			$('.bomb').addClass('exploded');
			if ($('.bomb').hasClass('flagged-right')) {
				$(".flagged-right").addClass("correct");
				$(".flagged-right").load('flag')
			}	
			if ($(".block").hasClass("flagged-wrong")) {
				$(".flagged-wrong").addClass("wrong");
				$(".flagged-wrong").load('flag')
			}
		}
		else if ($('button').hasClass('check')) {
			$('.check').addClass("destroyed");
			$('.check').load("bombNum"); 
			$('.check').removeClass("check");
			checked = false;
		} 
	});
});