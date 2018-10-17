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
// 图片放大
function removeUnScroll() {
	$(document).unbind("scroll.unable");
	$('body').css('overflow','auto');
}
function unScroll() {
	var top = $(document).scrollTop();
	$(document).on('scroll.unable',function (e) {
		$(document).scrollTop(top);
	})
	$('body').css('overflow','hidden');
}
$(".content_img").click(function(){
	var src = $(this).children("a").children("img").attr("src");
	$(".largen").show();
	$(".largen_content img").attr("src",src);
	unScroll();
});
$(".close").click(function(){
	$(".largen").hide();
	removeUnScroll();
});

$(document).on("mousewheel DOMMouseScroll", function (e) {
	var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1))||
              (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));      
   if (delta != 0) {
		var result = $('.footer')[0].offsetTop - $(window).scrollTop(),
			hasNotDome = true;
		if(result < 500 && hasNotDome) {
			hasNotDome = false;
			$('.fadeInDown').css({
				'animation-name': 'fadeInDown',
				"opacity":"1"
			}).fadeIn();
			$('.fadeInUp').css({
				'animation-name': 'fadeInUp',
				"opacity":"1"
			}).fadeIn();
		}
   }
});
$("html, body").scrollTop(0+"px");
$('html,body').stop().animate({scrollTop: '0px'});
$(document).ready(function(){
	$(window).scroll(function(){
		var topp = $(document).scrollTop();
		console.log(topp);
		if(topp >= 200 && topp <= 500){
			$(".nav").css({
				"animation":"fadeInDown 1s",
				"opacity":"1"
			});
		};
		if(topp >= 500 && topp <= 1200){
			$("nav").css({
				"animation":"fadeInRight 1s",
				"opacity":"1"
			});
			$(".tab_head").css({
				"animation":"fadeInLeft 1s",
				"opacity":"1"
			});
		};
		if(topp >= 1200 && topp <= 1700){
			$(".content_left").css({
				"animation":"fadeInRight 1s",
				"opacity":"1"
				});
			$(".content_right").css({
				"animation":"fadeInLeft 1s",
				"opacity":"1"
			});
		};
	});
});
