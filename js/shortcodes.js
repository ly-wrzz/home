$(".j_ComboBox").click(function(){
	if ($(".menu").is(":hidden")) {
		$(".j_ComboBox .wire").css("width","100%");
		$(".menu").show();
	}else {
		$(".j_ComboBox .wire").css("width","0");
		$(".menu").hide();
	}
});
$(".j_nav").click(function(){
	$(".j_nav").removeClass("orange");
	$(this).addClass("orange");
	$(".tab_head").hide();
	var chunk = $($(".tab_head")[$(this).val()]);
	if (chunk.is(":hidden")) {
		chunk.show();
	}else {
		chunk.hide();
	}
});
$(".nav").css({"opacity":"1"});
$(document).on("mousewheel DOMMouseScroll", function (e) {
	var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1))||
              (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));      
   if (delta != 0) {
		var result = $('.footer')[0].offsetTop - $(window).scrollTop(),
			hasNotDome = true;
		if(result < 500 && hasNotDome) {
			hasNotDome = false;
			$('.fadeInDown').css({'animation-name': 'fadeInDown'}).fadeIn();
			$('.fadeInUp').css({'animation-name': 'fadeInUp'}).fadeIn();
		}
   }
});
$("html, body").scrollTop(0+"px");
$('html,body').stop().animate({scrollTop: '0px'});
$(document).ready(function(){
	$(window).scroll(function(){
		var topp = $(document).scrollTop();
		console.log(topp);
		if(topp > 180){
			$(".table").css({
				"animation":"fadeInLeft 1s",
				"opacity":"1"
			});
		};
		if(topp > 500){
			$(".J_code_header_1").css({
				"animation":"fadeInDown 1s",
				"opacity":"1"
			});
		};
		if(topp > 800){
			$(".J_code_header_2").css({
				"animation":"fadeInRight 1s",
				"opacity":"1"
			});
		};
		if(topp > 1440){
			$(".J_code_header_3").css({
				"animation":"fadeInUp 1s",
				"opacity":"1"
			});
		};
		if(topp > 1600){
			$(".J_code_header_4").css({
				"animation":"fadeInRight 1s",
				"opacity":"1"
			});
		};
		if(topp > 2000){
			$(".J_code_header_5").css({
				"animation":"fadeInRight 1s",
				"opacity":"1"
			});
		};
		if(topp > 2350){
			$(".J_code_header_6").css({
				"animation":"fadeInLeft 1s",
				"opacity":"1"
			});
		};
		if(topp > 2700){
			$(".J_code_header_7").css({
				"animation":"fadeInLeft 1s",
				"opacity":"1"
			});
		};
		if(topp > 3000){
			$(".J_code_header_8").css({
				"animation":"fadeInUp 1s",
				"opacity":"1"
			});
		};
		if(topp > 3700){
			$(".J_code_header_9").css({
				"animation":"fadeInUp 1s",
				"opacity":"1"
			});
		};
	});
});