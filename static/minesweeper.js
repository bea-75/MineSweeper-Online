$(document).ready(function() {
	
	var checked = false;
	var game_end = false;
	
	$(".bomb-num").load("bomb_num")
	
	$(".block").click(function() {
		if ($('button').hasClass('check')){
			checked = true;
		} else {
			checked = false;
		}
		
		
		if (checked == false) {
			$(this).addClass("check");
			$(this).removeClass("block");
		}
		if (checked == true) {
			$(this).removeClass("check");
			$(this).addClass("block");
		}
	});
	
	$(".flag").click(function() {
		if ($('button').hasClass('check') && $('.check').hasClass('flagged')) {
			$('.check').load('unflag')
			$('.check').addClass("block");

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
			$('.bomb').addClass('exploded');
			if ($('.bomb').hasClass('flagged-right')) {
				$(".flagged-right").load('flag')
				$(".flagged-right").addClass("correct");
			}	
			if ($(".block").hasClass("flagged-wrong")) {
				$(".flagged-wrong").load('flag')
				$(".flagged-wrong").addClass("wrong");
			}
			setTimeout(function(){
				$('.game').load('game_end_lose')
			}, 1000);
		}
		else if ($('button').hasClass('check') && $(".check").hasClass("0")) {
			$('.0').addClass("destroyed-0");
			$('.check').removeClass("check");
			checked = false;
		}
		else if ($('button').hasClass('check')) {
			$('.check').addClass("destroyed");
			$('.check').removeClass("check");
			checked = false;
		}
	});
});