setTimeout(function(){
	$(".eye").show(500);
},500);
setTimeout(function(){
	$(".video_text_1").addClass("active2");
},1000);
$("nav").css("top","0");
$(".gallery_a").click(function(){
	$(".gallery_min").toggle();
	$(this).find(".bord").addClass("active");
});
$(".form").addClass("active3");
$(window).scroll(function(){
	var topp = $(document).scrollTop();
	if(topp>600){
		$(".footer_top").css("opacity","1");
		$(".footer_top").addClass("active7");
		$(".footer_bottom").css("opacity","1");
		$(".footer_bottom").addClass("active8");
	}
});
$("html, body").scrollTop(0+"px");
$('html,body').stop().animate({scrollTop: '0px'});