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
$(window).scroll(function(){
	var topp = $(document).scrollTop();
	if(topp > 20){
		$(".st1_bottom_1").css("opacity","1");
		$(".st1_bottom_1").addClass("active3");
	}
	if(topp>400){
		$(".st1_bottom_2").css("opacity","1");
		$(".st1_bottom_2").addClass("active3");
	}
	if(topp>800){
		$(".st1_bottom_3").css("opacity","1");
		$(".st1_bottom_3").addClass("active4");
	}
	if(topp>1300){
		$(".footer_top").css("opacity","1");
		$(".footer_top").addClass("active7");
		$(".footer_bottom").css("opacity","1");
		$(".footer_bottom").addClass("active8");
	}
})
var showBigImg = {
	init: function() {
		this.bind();
	},
	bind: function(){
		var $smallImg = $('.J_show_big_img'),
			$smallPic = $('.J_show_big_img').find('img'),
			picList = [],
			$leftIcon = $('.left_icon'),
			$rightIcon = $('.right_icon'),
			$currentPage = $('.current_page'),
			$totalPage = $('.total_page'),
			$bigImg = $('.J_img_big'),
			$bigContent = $('.show_big_content');
		//循环数组
		$smallPic.each(function(index){
			picList.push($smallPic[index].src);
		});
		$totalPage.html(picList.length);
		//点击事件
		$smallImg.on('click', function() {
			var index = $smallImg.index($(this));
			$bigContent.fadeIn();
			$bigImg.attr('src', picList[index]);
			$currentPage.html(index + 1);
			showBigImg.checkedIndex(index, picList, $leftIcon, $rightIcon);
			//左边按钮点击事件
			$leftIcon.on('click', function(e){
				e.stopPropagation();
				index = index - 1;
				showBigImg.checkedIndex(index, picList, $leftIcon, $rightIcon);
				$bigImg.attr('src', picList[index]);
				$currentPage.html(index + 1);
			});
			//右边按钮点击事件
			$rightIcon.on('click', function(e){
				e.stopPropagation();
				index = index + 1;
				showBigImg.checkedIndex(index, picList, $leftIcon, $rightIcon);
				$bigImg.attr('src', picList[index]);
				$currentPage.html(index + 1);
			})
		});
		//大框关闭
		$bigContent.on('click', function(){
			$(this).fadeOut();
		});
	},
	checkedIndex: function(index, arr, dom1, dom2) {
		/**
		 * [checkedIndex description]
		 * @param  {[Number]} index [序号]
		 * @param  {[Array]} arr   [数组]
		 * @param  {[Object]} dom1  [对象1]
		 * @param  {[Object]} dom2  [对象2]
		 * @return {[Null]}       [空]
		 */
		if(index == 0) {
			dom1.hide();
		}else{
			dom1.show();
		}
		if(index == arr.length - 1) {
			dom2.hide();
		}else{
			dom2.show();
		}
	}
};
showBigImg.init();
$("html, body").scrollTop(0+"px");
$('html,body').stop().animate({scrollTop: '0px'});
$(".j_ComboBox").click(function(){
	if ($(".menu").is(":hidden")) {
		$(".j_ComboBox .wire").css("width","100%");
		$(".menu").show();
	}else {
		$(".j_ComboBox .wire").css("width","0");
		$(".menu").hide();
	}
});